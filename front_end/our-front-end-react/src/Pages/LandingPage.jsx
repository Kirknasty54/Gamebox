import React from 'react';
import GameCards from '../Components/GameCards';
import NavBar from '../Components/NavBar';
import { Link } from "react-router-dom";
import AnimatedBg from "react-animated-bg";
import './Landing.css';
import LoadingSpinner from '../Components/LoadingSpinner';
import ReviewModal from '../Components/ReviewModal';

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

  return (
    <>
      <NavBar />
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
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light text-dark" style={{ fontFamily: 'Geist' }}>
                Hello and welcome to GameBox
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
            <div className="button-group">
                <Link to="/Favorited" className="btn btn-primary my-2 mx-2">Favorited Games</Link>
                <Link to="/Popular" className="btn btn-secondary my-2 mx-2">Popular Games</Link>
            </div>
            </div>
        </div>
        </section>

      </AnimatedBg>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {Array(9).fill().map((_, index) => (
              <div className="col" key={index}>
                <div className="card shadow">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to='/GoToGame' role="button" className="btn btn-sm btn-outline-secondary">View Game</Link>
                      </div>
                      <small className="text-dark">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
