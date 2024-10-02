// Favorited.js
import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import NavBarUser from '../Components/NavBarUser';
import axios from 'axios';
import AnimatedBg from 'react-animated-bg';
import './Favorited.css'; 
import { Link } from "react-router-dom";
import ReviewModal from '../Components/ReviewModal'; 
import Spinner from '../Components/LoadingSpinner'; 

const Favorited = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('/api/favorites'); 
        console.log('API Response:', response.data); // Log the response
        if (Array.isArray(response.data)) {
          setItems(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
          setItems([]); // Set to empty array if not valid
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
        setItems([]); // Ensure items is set to an empty array on error
      } finally {
        setLoading(false);
      }
    };
    
    fetchFavorites();
  }, []);
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setItems(storedFavorites); // Set items to the stored favorites
  }, []);
  

  useEffect(() => {
    const storedUserSession = localStorage.getItem('userSession') || sessionStorage.getItem('userSession');
    if (storedUserSession) {
      setUser(JSON.parse(storedUserSession));
    }
  }, []);

  const handleShowModal = (game) => {
    setSelectedGame(game);
    setModalShow(true);
  };

  const navBar = user ? <NavBarUser/> : <NavBar />;
  
  return (
    <>
      {navBar}
      <AnimatedBg
        colors={["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bfbcf", "#a0e7e5"]}
        duration={5}
        delay={1}
        timingFunction="linear"
        randomMode
        style={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <section className="text-center container">
          <h1 className="fw-light text-dark" style={{ fontFamily: 'Geist' }}>Favorited Games</h1>
          <Link to="/Popular" className="btn btn-primary my-2 mx-2">Popular Games</Link>
          <Link to="/" className="btn btn-secondary my-2 mx-2">Browse Games</Link>
        </section>
      </AnimatedBg>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          {loading ? (
            <Spinner />
          ) : (
            items.length === 0 ? (
              <p>No favorites found. Start adding some!</p>
            ) : (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {items.map((item) => (
                  <div className="col" key={item.id}>
                    <div className="card shadow-sm" onClick={() => handleShowModal(item)}>
                      <img src={item.image_url} alt={`Thumbnail for ${item.title}`} className="card-img-top" />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <Link to={`/game/${item.id}`} className="btn btn-sm btn-outline-secondary">View Game</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>

      <ReviewModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        game={selectedGame}
      />
    </>
  );
};

export default Favorited;
