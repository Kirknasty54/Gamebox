import React from 'react';
import NavBar from '../Components/NavBar';
import { Link } from "react-router-dom";
import AnimatedBg from "react-animated-bg";
import './Landing.css';

function LandingPage() {
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
            <div className="col-lg-6 mx-auto">
              <h1 className="fw-light text-dark" style={{ fontFamily: 'Geist' }}>
                Hello and Welcome to GameBox
              </h1>
              <div className="text-box">
                <p className="lead mb-4 text-dark" style={{ fontFamily: 'Geist' }}>
                  Quickly design and customize responsive mobile-first sites with Bootstrap,
                  the world’s most popular front-end open source toolkit,
                  featuring Sass variables and mixins, responsive grid system,
                  extensive prebuilt components, and powerful JavaScript plugins.
                </p>
              </div>
              <Link to="/Favorited" className="btn btn-primary my-2 mx-2">Favorited Games</Link>
              <Link to="/Popular" className="btn btn-secondary my-2 mx-2">Popular Games</Link>
            </div>
          </div>
        </section>
      </AnimatedBg>
      
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div 
            id="gameCarousel" 
            className="carousel slide" 
            data-bs-ride="carousel" 
            data-bs-interval="50000" // Change this to your desired autoplay duration (in milliseconds)
          >
            <div className="carousel-inner">
              {Array(6).fill().map((_, carouselIndex) => (
                <div className={`carousel-item ${carouselIndex === 0 ? 'active' : ''}`} key={carouselIndex}>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {Array(3).fill().map((_, cardIndex) => (
                      <div className="col" key={cardIndex}>
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
        </div>
      </div>
    </>
  );
}

export default LandingPage;
