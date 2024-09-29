import requests
import mysql.connector
import time
import re

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
        "field_list": "id,name,developers,publishers,original_release_date,image",
    }

    response = requests.get(url, headers=headers, params=params)

    if response.status_code == 200:
        return response.json().get("results", {})
    else:
        print(
            f"Error fetching details for game ID {game_id}: {response.status_code}, {response.text}"
        )
        return {}


# Extract the release date from CDATA format
def extract_release_date(detailed_game_info):
    # Try to get the release date directly
    original_release_date = detailed_game_info.get("original_release_date")

    # If it's None, return "N/A"
    if original_release_date is None:
        return "N/A"

    # If it is a string, check if it's in CDATA format
    if isinstance(original_release_date, str):
        match = re.search(r"\<\!\[CDATA\[(.*?)\]\]\>", original_release_date)
        if match:
            return match.group(1)
        else:
            return original_release_date  # Return it as is if not in CDATA format

    return "N/A"  # Return a default value if original_release_date is not a string


# Upload the fetched games to the database
def upload_games_to_db(games):
    connection = connect_to_db()
    cursor = connection.cursor()

    insert_query = """
    INSERT INTO game_info (game_id, game_name, developer, publisher, release_date, image_url)
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

        # Extract the release date
        release_date = extract_release_date(detailed_game_info)
        image_url = detailed_game_info.get("image", {}).get("super_url", "N/A")

        cursor.execute(
            insert_query,
            (game_id, game_name, developer, publisher, release_date, image_url),
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
