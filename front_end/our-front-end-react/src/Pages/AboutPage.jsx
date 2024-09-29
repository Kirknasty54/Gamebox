// AboutPage.js
import React from 'react';
import NavBar from '../Components/NavBar';
import { Link } from 'react-scroll';

import './Aboutus.css';


const AboutPage = () => {
  return (
    <>
      <NavBar />
      <h1 className='header'>About Us</h1>

      <div className='box'>
        <h3 className='title'>Our Mission</h3>
        <div className='content'> {/* Add this class for flexbox layout */}
          <img title='about-image' src='collin.svg' className='about-image' alt='About Us'/>
          <p>
            We are dedicated to providing the best services to our customers. Our mission is to...
          </p>
        </div>
      </div>
      
      <div className='box'>
        <h3 className='title'>Our Mission</h3>
        <div className='content'> {/* Add this class for flexbox layout */}
          <img title='about-image' src='collin.svg' className='about-image' alt='About Us'/>
          <p>
            We are dedicated to providing the best services to our customers. Our mission is to...
          </p>
        </div>
      </div>
     
      <div className='box'>
        <h3 className='title'>Our Mission</h3>
        <div className='content'> {/* Add this class for flexbox layout */}
          <img title='about-image' src='collin.svg' className='about-image' alt='About Us'/>
          <p>
            We are dedicated to providing the best services to our customers. Our mission is to...
          </p>
        </div>
      </div>

      <div className='box'>
        <h3 className='title'>Our Mission</h3>
        <div className='content'> {/* Add this class for flexbox layout */}
          <img title='about-image' src='collin.svg' className='about-image' alt='About Us'/>
          <p>
            We are dedicated to providing the best services to our customers. Our mission is to...
          </p>
        </div>
      </div>
      
      <div className='box'>
        <h3 className='title'>Our Mission</h3>
        <div className='content'> {/* Add this class for flexbox layout */}
          <img title='about-image' src='collin.svg' className='about-image' alt='About Us'/>
          <p>
            We are dedicated to providing the best services to our customers. Our mission is to...
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;