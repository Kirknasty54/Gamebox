// AboutPage.js
import React from 'react';
import NavBar from '../Components/NavBar';
const AboutPage = () => {
  return (
    <>
    <NavBar/>
    <div className='container'>
    <div className='row justify-content-center'>
    <div className = "p-5 mt-3 mb-4 bg-dark rounded-3" data-bs-theme='dark'>
        <div className='container-fluid py-5'>
            <h1 className='display-5 fw-bold text-light'>
                Welcome to GameBox
            </h1>
            <p className = 'col-md-8 fs-4 text-light'>We are a group of dedicated 
                gamers who are seeking to bring more poeple into the fold</p>
            <div className='col-md-4 justify-content-center'>
                <input className='form-control mt-3' placeholder='Username'></input>
                <input className='form-control mt-3' placeholder='Password'></input>
            </div>
        </div>
    </div>
    </div>
</div>
    <ul className="dropdown-menu d-block position-static mx-0 border-0 shadow" data-bs-theme="dark" style={{ width: '220px' }}>
      <li>
        <a className="dropdown-item d-flex gap-2 align-items-center" href="#">
          <svg className="bi" width="16" height="16">
            <use xlinkHref="#files" />
          </svg>
          Documents
        </a>
      </li>
      <li>
        <a className="dropdown-item d-flex gap-2 align-items-center" href="#">
          <svg className="bi" width="16" height="16">
            <use xlinkHref="#image-fill" />
          </svg>
          Photos
        </a>
      </li>
      <li>
        <a className="dropdown-item d-flex gap-2 align-items-center" href="#">
          <svg className="bi" width="16" height="16">
            <use xlinkHref="#film" />
          </svg>
          Movies
        </a>
      </li>
      <li>
        <a className="dropdown-item d-flex gap-2 align-items-center" href="#">
          <svg className="bi" width="16" height="16">
            <use xlinkHref="#music-note-beamed" />
          </svg>
          Music
        </a>
      </li>
      <li>
        <a className="dropdown-item d-flex gap-2 align-items-center" href="#">
          <svg className="bi" width="16" height="16">
            <use xlinkHref="#joystick" />
          </svg>
          Games
        </a>
      </li>
      <li><hr className="dropdown-divider" /></li>
      <li>
        <a className="dropdown-item d-flex gap-2 align-items-center" href="#">
          <svg className="bi" width="16" height="16">
            <use xlinkHref="#trash" />
          </svg>
          Trash
        </a>
      </li>
    </ul>
</>
  );
};

export default AboutPage;