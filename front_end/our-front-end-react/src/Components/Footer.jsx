import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const handleBackToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function Footer() {
  return (
    <footer className="footer py-4 mt-auto text-light bg-dark">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Gamebox all rights reserved</p>
        <div className="footer-links mt-3">
          <a href="/privacy" className="footer-link text-light mx-2">Privacy Policy</a>
          <a href="/terms" className="footer-link text-light mx-2">Terms of Service</a>
          <a href="/signin" className="footer-link text-light mx-2">Login</a>
          <a href="/signup" className="footer-link text-light mx-2">Sign Up</a>
        </div>
        <p className="mt-3">
          <a className="text-light" href="#" onClick={(e) => { e.preventDefault(); handleBackToTop(); }}>
            Back to top
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
