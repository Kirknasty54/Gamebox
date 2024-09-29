import React from 'react';
import NavBar from '../Components/NavBar';
import './Privacy.css'; // Ensure this CSS file is created

const Privacy = () => {
  return (
    <>
      <NavBar />
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p>Last updated: September 28, 2024</p>
        
        <h2>Introduction</h2>
        <p>
          Welcome to GameBox! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, and other contact details.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website.</li>
          <li><strong>Cookies:</strong> Small files stored on your device to enhance your experience.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including:</p>
        <ul>
          <li>To provide and maintain our service.</li>
          <li>To notify you about changes to our website.</li>
          <li>To allow you to participate in interactive features.</li>
          <li>To provide customer support.</li>
          <li>To gather analysis or valuable information for improving our service.</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We prioritize the security of your data. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our service is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from anyone under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul>
          <li>Email: <a href="mailto:support@gamebox.com">support@gamebox.com</a></li>
        </ul>
      </div>
    </>
  );
};

export default Privacy;
