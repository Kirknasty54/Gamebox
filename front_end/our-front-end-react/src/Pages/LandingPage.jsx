import React from 'react';
import GameCards from '../Components/GameCards';
import NavBar from '../Components/NavBar';
import { Link } from "react-router-dom";
import AnimatedBg from "react-animated-bg";
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
                            <h1 className="fw-light" style={{ fontFamily: 'Geist' }}>
                                Hello and welcome to GameBox
                            </h1>
                            <div className="text-box">
                                <p className="lead mb-4" style={{ fontFamily: 'Geist' }}>
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

            <div className="album py-5">
                <div className="container">
                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {filteredGames.map((game, index) => (
                                <div className="col" key={index}>
                                    <div className="card shadow-sm">
                                        <img src={game.img} alt={`Thumbnail for ${game.title}`} className="card-img-top" />
                                        <div className="card-body">
                                            <h5 className="card-title">{game.title}</h5>
                                            <p className="card-text">{game.description}</p>
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
                    )}
                </div>
            </div>

            {reviewModalVisible && (
                <ReviewModal 
                    game={selectedGameForReview} 
                    closeModal={closeReviewModal} 
                />
            )}
        </>
    );
}

export default LandingPage;
