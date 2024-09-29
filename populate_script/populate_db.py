import time
import requests
import random
import mysql.connector

API_KEY = "2f10762828e577b7956ba70452dcd91164c806e9"
DB_URL = "hackmidwest-gamebox-app.c986wiuwap7e.us-east-1.rds.amazonaws.com"
DB_USER = "admin"
DB_PASSWORD = "MAR123456f$"
DB_NAME = "GameBox"


def connect_to_db():
    return mysql.connector.connect(
        host=DB_URL, user=DB_USER, password=DB_PASSWORD, database=DB_NAME
    )


def fetch_games():
    url = "https://www.giantbomb.com/api/games/"
    headers = {
        "User-Agent": "MyGameScraper/1.0"  # Custom User Agent
    }

    params = {
        "api_key": API_KEY,
        "format": "json",
        "limit": 100,  # Fetch 100 games at a time
        "offset": 0,
    }

    released_games = []
    while len(released_games) < 100:
        response = requests.get(url, headers=headers, params=params)

        if response.status_code == 200:
            all_games = response.json().get("results", [])
            # Filter games that have an original_release_date
            released_games += [
                game for game in all_games if game.get("original_release_date")
            ]

            # If no more games are returned, break the loop
            if not all_games:
                break

            # Increment offset for the next batch of games
            params["offset"] += 100
        else:
            print(f"Error: {response.status_code}, {response.text}")
            break

    # Randomly select 100 released games (or all if less than 100 found)
    if len(released_games) >= 100:
        return random.sample(released_games, 100)
    else:
        print(f"Only found {len(released_games)} released games.")
        return released_games  # Return whatever is available


def fetch_game_details(game_id):
    time.sleep(5)
    url = f"https://www.giantbomb.com/api/game/{game_id}/"
    headers = {
        "User-Agent": "MyGameScraper/1.0"  # Custom User Agent
    }
    params = {
        "api_key": API_KEY,
        "format": "json",
        "field_list": "id,name,developers,publishers,original_release_date",
    }
    response = requests.get(url, headers=headers, params=params)
    if response.status_code == 200:
        print(
            response.json().get(
                "results",
            )
        )
        return response.json().get("results", [])
    else:
        print(
            f"Error fetching details for game ID {game_id}: {response.status_code}, {response.text}"
        )
        return []


# Function to upload game data to the MySQL database
def upload_games_to_db(games):
    connection = connect_to_db()
    cursor = connection.cursor()

    insert_query = """
    INSERT INTO game_info (game_id, developer, game_name, publisher, release_date)
    VALUES (%s, %s, %s, %s, %s)
    """

    for game in games:
        game_id = game.get("id")
        game_name = game.get("name")

        # Fetch detailed game data
        detailed_game_info = fetch_game_details(game_id)

        # Check if detailed game information is available
        if detailed_game_info and len(detailed_game_info) > 0:
            # Check for developers and publishers
            developers = detailed_game_info[0].get("developers", [])
            publishers = detailed_game_info[0].get("publishers", [])

            developer = developers[0]["name"] if developers else None
            publisher = publishers[0]["name"] if publishers else None
            release_date = detailed_game_info[0].get("original_release_date")
        else:
            developer = publisher = release_date = None

        cursor.execute(
            insert_query, (game_id, developer, game_name, publisher, release_date)
        )

    connection.commit()
    cursor.close()
    connection.close()
    print("Games uploaded successfully!")


# Main function
def main():
    games = fetch_games()
    if games:
        upload_games_to_db(games)


if __name__ == "__main__":
    main()
