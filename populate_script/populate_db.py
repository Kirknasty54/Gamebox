import requests
import mysql.connector
import time

# Giant Bomb API Key and Database connection details
API_KEY = "2f10762828e577b7956ba70452dcd91164c806e9"
DB_URL = "hackmidwest-gamebox-app.c986wiuwap7e.us-east-1.rds.amazonaws.com"
DB_USER = "admin"
DB_PASSWORD = "MAR123456f$"
DB_NAME = "GameBox"


# Function to connect to MySQL database
def connect_to_db():
    return mysql.connector.connect(
        host=DB_URL, user=DB_USER, password=DB_PASSWORD, database=DB_NAME
    )


# Fetch the basic game list (100 random games)
def fetch_games():
    url = "https://www.giantbomb.com/api/games/"
    headers = {"User-Agent": "MyCustomUserAgent/1.0"}  # Updated User-Agent

    params = {
        "api_key": API_KEY,
        "format": "json",
        "limit": 100,
        "offset": 0,
        "sort": "original_release_date:desc",
        "filter": "original_release_date:1900-01-01|2024-12-31",  # Fetch released games
    }

    response = requests.get(url, headers=headers, params=params)

    if response.status_code == 200:
        return response.json().get("results", [])
    else:
        print(f"Error fetching games: {response.status_code}, {response.text}")
        return []


# Fetch detailed information about each game
def fetch_game_details(game_id):
    url = f"https://www.giantbomb.com/api/game/{game_id}/"
    headers = {"User-Agent": "MyCustomUserAgent/1.0"}  # Updated User-Agent

    params = {
        "api_key": API_KEY,
        "format": "json",
        "field_list": "id,name,developers,publishers,image,deck",  # Removed release date
    }

    response = requests.get(url, headers=headers, params=params)

    if response.status_code == 200:
        return response.json().get("results", {})
    else:
        print(
            f"Error fetching details for game ID {game_id}: {response.status_code}, {response.text}"
        )
        return {}


# Upload the fetched games to the database
def upload_games_to_db(games):
    connection = connect_to_db()
    cursor = connection.cursor()

    insert_query = """
    INSERT INTO game_info (game_id, game_name, developer, publisher, image_url, description)
    VALUES (%s, %s, %s, %s, %s, %s)
    """

    for game in games:
        game_id = game.get("id")
        game_name = game.get("name")

        # Fetch detailed information for each game
        detailed_game_info = fetch_game_details(game_id)

        developer = (
            detailed_game_info.get("developers", [{"name": "N/A"}])[0]["name"]
            if detailed_game_info.get("developers")
            else "N/A"
        )
        publisher = (
            detailed_game_info.get("publishers", [{"name": "N/A"}])[0]["name"]
            if detailed_game_info.get("publishers")
            else "N/A"
        )

        image_url = detailed_game_info.get("image", {}).get("super_url", "N/A")
        description = detailed_game_info.get("deck", "N/A")  # Get description

        cursor.execute(
            insert_query,
            (
                game_id,
                game_name,
                developer,
                publisher,
                image_url,
                description,
            ),  # No release date
        )

        # Add a delay to avoid rate limiting
        time.sleep(1)

    connection.commit()
    cursor.close()
    connection.close()
    print(f"Successfully uploaded {cursor.rowcount} games to the database!")


# Main function
def main():
    games = fetch_games()
    if games:
        upload_games_to_db(games)


if __name__ == "__main__":
    main()
