import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import { Link } from "react-router-dom";
import AnimatedBg from "react-animated-bg";
import './Landing.css';
import LoadingSpinner from '../Components/LoadingSpinner';
import ReviewModal from '../Components/ReviewModal';
import NavBarUser from '../Components/NavBarUser';

function LandingPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const [selectedGameForReview, setSelectedGameForReview] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await new Promise((resolve) => {
          setTimeout(() => resolve(Array(9).fill({ title: 'Sample Game', description: 'Description here', img: 'https://via.placeholder.com/150', rating: 4.5, reviews: [] })), 1000);
        });
        setGames(response);
        setFilteredGames(response);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  useEffect(() => {
    const filtered = games.filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredGames(filtered);
  }, [searchTerm, games]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFavoriteToggle = (game) => {
    setFavorites(prevFavorites => 
      prevFavorites.includes(game) 
        ? prevFavorites.filter(fav => fav !== game) 
        : [...prevFavorites, game]
    );
  };

  const openReviewModal = (game) => {
    setSelectedGameForReview(game);
    setReviewModalVisible(true);
  };

  const closeReviewModal = () => {
    setReviewModalVisible(false);
    setSelectedGameForReview(null);
  };

    const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUserSession = localStorage.getItem('userSession') || sessionStorage.getItem('userSession');
    if (storedUserSession) {
      setUser(JSON.parse(storedUserSession));
    }
  }, []);
  const navBar = localStorage.getItem('userSession') || sessionStorage.getItem('userSession') ? <NavBarUser/> : <NavBar />;
  return (
    <>
      {navBar}
      <AnimatedBg
        colors={["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bfbcf", "#a0e7e5"]}
        duration={5}
        delay={1}
        timingFunction="linear"
        randomMode
        style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <section className="background-section text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 mx-auto">
              <h1 className="fw-light text-dark" style={{ fontFamily: 'Geist' }}>
                Hello and Welcome to GameBox
              </h1>
              <div className="text-box">
                <p className="lead mb-4 text-dark" style={{ fontFamily: 'Geist' }}>
                  Quickly design and customize responsive mobile-first sites with Bootstrap,
                  the world’s most popular front-end open source toolkit.
                </p>
              </div>
              <input
                type="text"
                placeholder="Search for games..."
                className="search-input"
                value={searchTerm}
                onChange={handleSearch}
                aria-label="Search games"
              />
              <Link to="/Favorited" className="btn btn-primary my-2 mx-2">Favorited Games</Link>
              <Link to="/Popular" className="btn btn-secondary my-2 mx-2">Popular Games</Link>
            </div>
          </div>
        </section>
      </AnimatedBg>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div id="gameCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
              <div className="carousel-inner">
                {filteredGames.reduce((rows, game, index) => {
                  // Create a new carousel item for each row of 3 games
                  if (index % 3 === 0) {
                    rows.push([]);
                  }
                  rows[rows.length - 1].push(game);
                  return rows;
                }, []).map((group, carouselIndex) => (
                  <div className={`carousel-item ${carouselIndex === 0 ? 'active' : ''}`} key={carouselIndex}>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                      {group.map((game, gameIndex) => (
                        <div className="col" key={gameIndex}>
                          <div className="card shadow-sm">
                            <img src={game.img} alt={`Thumbnail for ${game.title}`} className="card-img-top" />
                            <div className="card-body">
                              <h5 className="card-title">{game.title}</h5>
                              <p className="card-text text-dark">{game.description}</p>
                              <div className="rating">{`⭐ ${game.rating}`}</div>
                              <small className="time-text">9 mins</small>
                            </div>
                            <div className="card-footer">
                              <div className="btn-group">
                                <Link to='/GoToGame' role="button" className="btn btn-sm btn-outline-secondary">View Game</Link>
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => openReviewModal(game)}>Review</button>
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => handleFavoriteToggle(game)}>
                                  {favorites.includes(game) ? 'Unfavorite' : 'Favorite'}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#gameCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#gameCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {reviewModalVisible && (
        <ReviewModal 
          game={selectedGameForReview} 
          closeModal={closeReviewModal} 
        />
      )}

      <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
        ↑
      </button>
      <footer className="footer">
        <div className="container text-center">
          <p>© 2024 GameBox. All Rights Reserved.</p>
          <div className="footer-links">
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
            <Link to="/login" className="footer-link">Login</Link>
            <Link to="/signup" className="footer-link">Sign Up</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
