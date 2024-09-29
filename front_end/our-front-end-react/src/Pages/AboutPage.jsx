// AboutPage.js
import React from 'react';
import NavBar from '../Components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Aboutus.css';


const AboutPage = () => {
  return (
    <>
      <NavBar />
      <h1 className='header'>About Us</h1>
      <Container>
      <Row>
        <Col>
        <div className='box'>
        <h3 className='title'>Our Mission</h3>
        <div className='content'> {/* Add this class for flexbox layout */}
          <img title='about-image' src='collin.svg' className='about-image' alt='About Us'/>
          <p className='p1'>
            We are dedicated to providing the best services to our customers. Our mission is to...
          </p>
        </div>
      </div>
        
        </Col>
        <Col>
        <div className='box'>
        <h3 className='title'>Our Mission</h3>
        <div className='content'> {/* Add this class for flexbox layout */}
          <img title='about-image' src='collin.svg' className='about-image' alt='About Us'/>
          <p className='p1'>
            We are dedicated to providing the best services to our customers. Our mission is to...
          </p>
        </div>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
        <div className='box1'>
        <h3 className='title1'>Our Mission</h3>
        <div className='content1'> {/* Add this class for flexbox layout */}
          <img title='about-image1' src='collin.svg' className='about-image' alt='About Us'/>
          <p className='p2'>
            We are dedicated to providing the best services to our customers. Our mission is to...
          </p>
        </div>
      </div>
        
        </Col>
        <Col>
        <div className='box1'>
        <h3 className='title1'>Our Mission</h3>
        <div className='content1'> {/* Add this class for flexbox layout */}
          <img title='about-image1' src='collin.svg' className='about-image' alt='About Us'/>
          <p className='p2'>
            We are dedicated to providing the best services to our customers. Our mission is to...
          </p>
        </div>
      </div>
      </Col>
        <Col>
        <div className='box1'>
        <h3 className='title1'>Our Mission</h3>
        <div className='content1'> {/* Add this class for flexbox layout */}
          <img title='about-image1' src='collin.svg' className='about-image' alt='About Us'/>
          <p className='p2'>
            We are dedicated to providing the best services to our customers. Our mission is to...
          </p>
        </div>
      </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default AboutPage;