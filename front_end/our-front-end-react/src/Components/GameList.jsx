import React, { useEffect, useState } from 'react';
import { fetchAllGames, likeGame, unlikeGame } from './GameService';

const GameList = ({ userId }) => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGames = async () => {
      try {
        const gamesData = await fetchAllGames();
        setGames(gamesData);
      } catch (err) {
        setError(err.message);
      }
    };

    getGames();
  }, []);

  const handleLike = async (gameId) => {
    try {
      await likeGame(userId, gameId);
      // Optionally refresh the game list or update state here
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUnlike = async (gameId) => {
    try {
      await unlikeGame(userId, gameId);
      // Optionally refresh the game list or update state here
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map(game => (
          <li key={game.gameId}>
            <img src={game.imageUrl} alt={game.gameName} />
            <h2>{game.gameName}</h2>
            <p>{game.description}</p>
            <button onClick={() => handleLike(game.gameId)}>Like</button>
            <button onClick={() => handleUnlike(game.gameId)}>Unlike</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
