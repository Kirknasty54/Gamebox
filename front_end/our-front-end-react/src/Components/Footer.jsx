import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
const handleBackToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function Footer() {
  return (
    <footer className="footer py-4 mt-auto text-center bg-dark text-light">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Gamebox</p>
        <div className="py-5">
          <p>
            Get to know our team <a className="text-light" href="/about">About</a> or connect with us on <a className="text-light" href="https://www.linkedin.com/in/collin-davis-8a862a226/">LinkedIn</a>.
          </p>
          <p className="mb-0">
            <a className="text-light" href="#" onClick={(e) => { e.preventDefault(); handleBackToTop(); }}>
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
