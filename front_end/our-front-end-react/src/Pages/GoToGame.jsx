import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import NavBar from '../Components/NavBar';
import UserReviews from '../Components/UserReviews';
import axios from 'axios';
import './GoToGame.css';

function GoToGame() {
  const { gameId } = useParams(); // Get gameId from URL parameters
  const [game, setGame] = useState(null); // Changed to single game object

  useEffect(() => {
    const getGame = async () => {
      try {
        // const response = await axios.get('https://gameboxusa.com/api/v1/games', { timeout: 5000 });
        const response = await axios.get(`https://gameboxusa.com/api/v1/games/${gameId}`);
        if (response.data) {
          setGame(response.data);
        } else {
          console.error('Response data is not valid:', response.data);
          setGame(null);
        }
      } catch (error) {
        console.error('Error fetching game: ', error);
      }
    };
    getGame();
  }, [gameId]);

  // If game is not yet fetched, show a loading message or spinner
  if (!game) {
    return (
      <div className="loading">
        <h2>Loading game details...</h2>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="container-fluid mt-3">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={game.image_url || '../src/image.svg'} alt={`${game.game_name} cover`} />
          </div>
          <div className="col-md-4">
            <h1>{game.game_name}</h1>
            <p>{game.description}</p>
          </div>
          <div className="col-md-2 mt-2">
            <h4>Publisher</h4>
            <p>{game.publisher}</p>
          </div>
          <div className="col-md-2 mt-2">
            <h4>Developer</h4>
            <p>{game.developer}</p>
          </div>
        </div>
        <div className='row justify-content-end'>
          <div className='col-md-12 text-center'>
            <h2 className="text-black mt-2">User Reviews</h2>
            <UserReviews />
          </div>
        </div>
      </div>
    </>
  );
}

export default GoToGame;
