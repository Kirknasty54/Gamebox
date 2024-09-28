import React from 'react'
import GameCards from '../Components/GameCards'
import NavBar from '../Components/NavBar'
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
    <NavBar/>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light text-light">Hello and welcome to GameBox</h1>
             <div className = 'col-lg-6 mx-auto'>
                <p className = 'lead mb-4'>
                Quickly design and customize responsive mobile-first sites with Bootstrap, 
                the world’s most popular front-end open source toolkit, 
                featuring Sass variables and mixins, responsive grid system, 
                extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            </div>
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
                        <a href='/GoToGame' role="button" className="btn btn-sm btn-outline-secondary">View Game</a>
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

export default LandingPage
