import React from 'react';
import './Privacy.css';
import NavBar from '../Components/NavBar';

const PrivacyPolicy = () => {
  return (
    <>
      <NavBar />
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Communicate with you;</li>
          <li>Screen our orders for potential risk or fraud;</li>
          <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
        </ul>

        <h2>3. Sharing Your Personal Information</h2>
        <p>
          We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the site.
        </p>

        <h2>4. Your Rights</h2>
        <p>
          If you are a European resident, you have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted.
        </p>

        <h2>5. Changes</h2>
        <p>
          We may update this privacy policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at support@example.com.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
