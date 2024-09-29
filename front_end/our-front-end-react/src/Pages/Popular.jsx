import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import axios from 'axios';
import AnimatedBg from 'react-animated-bg';
import NavBarUser from '../Components/NavBarUser';
import { Link } from 'react-router-dom';

const Favorited = () => {
  const [items, setItems] = useState([]); // Ensure initial state is an array

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/games');
        // Ensure response data is an array
        const gamesData = response.data.slice(21,30)
        setItems(gamesData);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };
    fetchFavorites();
  }, []);

  // Sample placeholders for displaying items

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
        style={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light text-dark">Popular Games</h1>
            <a href="/Favorited" className="btn btn-primary my-2 mx-2">Favorited Games</a>
            <a href="/" className="btn btn-secondary my-2 mx-2">Browse Games</a>
          </div>
        </div>
      </section>
      </AnimatedBg>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {(items.length ? items : items).map((item, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <img src={item.image_url} alt={`Thumbnail for ${item.game_name}`} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-dark">{item.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to={`/GoToGame/${item.gameId}`} role="button" className="btn btn-sm btn-outline-secondary">View</Link>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorited;
