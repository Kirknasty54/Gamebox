import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import axios from 'axios';

const sampleItems = Array(9).fill().map((_, index) => ({
  title: `Sample Game ${index + 1}`,
  description: `This is a description for Sample Game ${index + 1}.`,
}));

const Favorited = () => {
  const [items, setItems] = useState(sampleItems); // Use sample items initially

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('/api/favorites'); // Replace with your API endpoint
        if (Array.isArray(response.data)) {
          setItems(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
          setItems(sampleItems); // Reset to sample items if needed
        }
      } catch (error) {
        console.error('Error fetching favorites:', error.response ? error.response.data : error.message);
        setItems(sampleItems); // Use sample items if there's an error
      }
    };
    // Uncomment the line below to fetch data from the backend once it's ready
    // fetchFavorites();
  }, []);

  return (
    <>
      <NavBar />
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light text-light">Favorited Games</h1>
            <a href="/Popular" className="btn btn-primary my-2 mx-2">Popular Games</a>
            <a href="/" className="btn btn-secondary my-2 mx-2">Browse Games</a>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {items.map((item, index) => (
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
