import React from 'react';
import './TermsOfService.css';
import NavBar from '../Components/NavBar';
const TermsOfService = () => {
  return (
    <>
    <NavBar/>
    <div className="terms-container">
      <h1 className="terms-header">Terms of Service</h1>
      <p className="terms-intro">
        Welcome to our website! These Terms of Service outline the rules and regulations for using our site.
      </p>
      
      <h2 className="terms-section-title">1. Acceptance of Terms</h2>
      <p className="terms-paragraph">
        By accessing this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site.
      </p>

        <h2 className="terms-section-title">2. Modifications</h2>
        <p className="terms-paragraph">
          We reserve the right to modify these Terms at any time. We will notify you of changes by posting the new Terms on this page.
        </p>

        <h2 className="terms-section-title">3. User Responsibilities</h2>
        <p className="terms-paragraph">
          You are responsible for your own actions while using the website, and you agree to comply with all applicable laws and regulations.
        </p>

        <h2 className="terms-section-title">4. Limitation of Liability</h2>
        <p className="terms-paragraph">
          In no event shall we be liable for any damages arising from your use of the site.
        </p>

        <h2 className="terms-section-title">5. Governing Law</h2>
        <p className="terms-paragraph">
          These Terms shall be governed by and construed in accordance with the laws of [Your Country].
        </p>

      <h2 className="terms-section-title">6. Contact Us</h2>
      <p className="terms-paragraph">
        If you have any questions about these Terms, please contact us at support@example.com.
      </p>
    </div>
    </>
  );
};

export default TermsOfService;
