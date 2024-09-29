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
        const response = await axios.get('/api/favorites'); // Replace with your API endpoint
        // Ensure response data is an array
        if (Array.isArray(response.data)) {
          setItems(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
          setItems([]); // Reset to empty array if data is not an array
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };
    fetchFavorites();
  }, []);

  // Sample placeholders for displaying items
  const sampleItems = Array(9).fill().map((_, index) => ({
    id: index,
    title: `Favorite Game ${index + 1}`,
    description: `Description for Favorite Game ${index + 1}`,
  }));
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
            {(items.length ? items : sampleItems).map((item, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                  </svg>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-dark">{item.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to = {`/GoToGame`} className ="btn btn-primary">View Test</Link>
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
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
    </>
  );
};

export default Favorited;
