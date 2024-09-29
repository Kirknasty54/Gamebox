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
              <h3 className='title'>Collin Davis</h3>
              <div className='content'>
                <img title='about-image' src='collin.svg' className='about-image' alt='About Us'/>
                <p className='p1'>
                  <a className="text-light" href="https://www.linkedin.com/in/collin-davis-8a862a226/">LinkedIn</a>
                </p>
                <di>Email: kirkpatrick545454@gmail.com</di>
              </div>
            </div>
          </Col>
          <Col>
            <div className='box'>
              <h3 className='title'>Jackson Kirkpatrick</h3>
              <div className='content'>
                <img title='about-image' src='jackson.png' className='about-image' alt='About Us'/>
                <p className='p1'>
              <a className="text-light" href="https://www.linkedin.com/in/john-k-34349424a">LinkedIn</a>
                </p>
                <di>Email: kirkpatrick545454@gmail.com</di>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='box'>
              <h3 className='title'>John Kutney</h3>
              <div className='content'>
                <img title='about-image' src='John.svg' className='about-image' alt='About Us'/>
                <p className='p1'>
                  <a className="text-light" href="https://www.linkedin.com/in/john-k-34349424a">LinkedIn</a>

                </p>
                <di>Email: kirkpatrick545454@gmail.com</di>
              </div>
            </div>
          </Col>
          <Col>
            <div className='box'>
              <h3 className='title'>Noah Bowling</h3>
              <div className='content'>
                <img title='about-image' src='noah.jpg' className='about-image' alt='About Us'/>
                <p className='p1'>
                <a className="text-light" href="www.linkedin.com/in/noah-bowling-42962a312">LinkedIn</a>

                </p>
                <di>Email: kirkpatrick545454@gmail.com</di>
              </div>
            </div>
          </Col>
          <Col>
            <div className='box'>
              <h3 className='title'>Jacob Lee </h3>
              <div className='content'>
                <img title='about-image' src='jacob1.jpg' className='about-image' alt='About Us'/>
                <di>Email: kirkpatrick545454@gmail.com</di>
                <p className='p1'>
                <a className="text-light" href="https://www.linkedin.com/in/john-k-34349424a">LinkedIn</a>
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
