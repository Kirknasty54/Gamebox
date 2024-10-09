import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar';
import { Link } from "react-router-dom";
import LoadingSpinner from '../Components/LoadingSpinner';
import ReviewModal from '../Components/ReviewModal';
import NavBarUser from '../Components/NavBarUser';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './Landing.css';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};


function LandingPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const [selectedGameForReview, setSelectedGameForReview] = useState(null);
  const [user, setUser] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://gameboxusa.com/api/v1/games?page=0&size=30', { timeout: 5000 });
        const gamesData = response.data.slice(0, 30);
        setGames(gamesData);
        setFilteredGames(gamesData);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms debounce

  // Filter games based on the search term
  useEffect(() => {
    const filtered = games.filter(game =>
      game.game_name && game.game_name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [debouncedSearchTerm, games]);


  useEffect(() => {
    const filtered = games.filter(game =>
      game.game_name && game.game_name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [debouncedSearchTerm, games]);


  useEffect(() => {
    const filtered = games.filter(game =>
      game.game_name && game.game_name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [debouncedSearchTerm, games]);

  const handleSearch = (e) => {
    const value = e.target.value || ''; // Ensure value is a string
    setSearchTerm(value);
  };
  const handleFavoriteToggle = async (game) => {
    const isFavorite = favorites.some(fav => fav.gameId === game.gameId);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter(fav => fav.gameId !== game.gameId);
      await axios.delete(`/api/favorites/${game.gameId}`).catch(error => console.error('Error removing favorite:', error));
    } else {
      updatedFavorites = [...favorites, game];
      await axios.post('/api/favorites', { gameId: game.gameId }).catch(error => console.error('Error adding favorite:', error));
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const openReviewModal = (game) => {
    setSelectedGameForReview(game);
    setReviewModalVisible(true);
  };

  const closeReviewModal = () => {
    setReviewModalVisible(false);
    setSelectedGameForReview(null);
  };

  useEffect(() => {
    const storedUserSession = localStorage.getItem('userSession') || sessionStorage.getItem('userSession');
    if (storedUserSession) {
      setUser(JSON.parse(storedUserSession));
    }
  }, []);

  const navBar = user ? <NavBarUser /> : <NavBar />;

  useEffect(() => {
    if (carouselRef.current) {
      new Flickity(carouselRef.current, {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 3000,
        prevNextButtons: true,
        pageDots: false,
      });
    }
  }, [filteredGames]);

  return (
    <>
      {navBar}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="container relative z-1">
        <div className="content">
          <input
            type="text"
            placeholder="Search for games..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearch}
            aria-label="Search games"
          />
          <div className="links">
            <Link to="/Favorited" className="link-item">Favorited Games</Link>
            <Link to="/Popular" className="link-item">Popular Games</Link>
          </div>
        </div>

        <div className="album">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="carousel" ref={carouselRef}>
              {filteredGames.map((game) => (
                <div className="carousel-cell" key={game.gameId}>
                  <div className="card">
                    <img src={game.image_url} alt={`Image of ${game.game_name}`} className="card-img-top small-image" />
                    <div className="card-body">
                      <h5 className="card-title">{game.game_name}</h5>
                      <p className="card-publisher">Publisher: {game.publisher}</p>
                      <div className="button-container">
                        <Link to={`./GoToGame/${game.gameId}`} className="btn btn-outline-primary">
                          View Game
                        </Link>
                        <button
                          type="button"
                          className={`btn ${favorites.some(fav => fav.gameId === game.gameId) ? 'btn-danger' : 'btn-outline-danger'}`}
                          onClick={() => handleFavoriteToggle(game)}
                        >
                          {favorites.some(fav => fav.gameId === game.gameId) ? 'Unfavorite' : 'Favorite'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {reviewModalVisible && (
          <ReviewModal
            game={selectedGameForReview}
            onClose={closeReviewModal}
          />
        )}
      </div>
    </>
  );
}

export default LandingPage;
