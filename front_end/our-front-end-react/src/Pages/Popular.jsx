import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar';
import { Link } from "react-router-dom";
import LoadingSpinner from '../Components/LoadingSpinner';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './Popular.css';

function PopularPage() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://gameboxusa.com/api/v1/games?page=0&size=90');
        setGames(response.data);
        setFilteredGames(response.data); // Initialize with all games
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  useEffect(() => {
    const flktyInstances = carouselRefs.current.map((carouselRef) => {
      if (carouselRef.current) {
        return new Flickity(carouselRef.current, {
          cellAlign: 'left',
          contain: true,
          wrapAround: true,
          autoPlay: 3000,
          prevNextButtons: true,
          pageDots: false,
        });
      }
      return null;
    });

    return () => {
      flktyInstances.forEach((flkty) => {
        if (flkty) {
          flkty.destroy();
        }
      });
    };
  }, [filteredGames]);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = games.filter(game =>
      game.game_name.toLowerCase().includes(value)
    );
    setFilteredGames(filtered);
  };

  const getGamesForCarousel = (startIndex) => {
    const endIndex = startIndex + 30;
    return filteredGames.map((game, index) => {
      if (index >= startIndex && index < endIndex) {
        return (
          <div className="carousel-cell" key={game.gameId}>
            <div className="card">
              <img src={game.image_url} alt={`Image of ${game.game_name}`} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{game.game_name}</h5>
                <p className="card-publisher">Publisher: {game.publisher}</p>
                <Link to={`./GoToGame/${game.gameId}`} className="btn btn-outline-primary">View Game</Link>
              </div>
            </div>
          </div>
        );
      }
      return null; // Return null for indices outside the range
    }).filter(Boolean); // Filter out nulls
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Popular Games</h1>
        <input
          type="text"
          placeholder="Search for games..."
          className="search-input"
          aria-label="Search games"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="links">
          <Link to="/Favorited" className="link-item">Favorited Games</Link>
          <Link to="/" className="link-item">Browse Games</Link>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {filteredGames.length > 0 && (
              <div className="category">
                <h2>Hot Now</h2>
                <div className="carousel" ref={carouselRefs.current[0]}>
                  {getGamesForCarousel(0)}
                </div>
              </div>
            )}

            {filteredGames.length > 30 && (
              <div className="category">
                <h2>Featured</h2>
                <div className="carousel" ref={carouselRefs.current[1]}>
                  {getGamesForCarousel(30)}
                </div>
              </div>
            )}

            {filteredGames.length > 60 && (
              <div className="category">
                <h2>Recommended to You</h2>
                <div className="carousel" ref={carouselRefs.current[2]}>
                  {getGamesForCarousel(60)}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default PopularPage;
