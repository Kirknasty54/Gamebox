// BrowseGames.js
import React from 'react';
import NavBar from '../Components/NavBar';
import './BrowseGames.css'; // Ensure to import your CSS file

const BrowseGames = () => {
  return (
    <>
      <NavBar />
      <section className="py-5 text-center container transparent-bg">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light text-light">Browse Games</h1>
            <a href="/Favorited" className="btn btn-primary my-2 mx-2">Favorited Games</a>
            <a href="/Popular" className="btn btn-secondary my-2 mx-2">Popular Games</a>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {Array(9).fill().map((_, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

export default BrowseGames;
