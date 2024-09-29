import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBarUser from '../Components/NavBarUser';
import NavBar from '../Components/NavBar';

const Login = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    setValues(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:8080/api/v1/users/auth', values)
      .then(response => {
        const userData = response.data;
        if (values.rememberMe) {
          localStorage.setItem('userSession', JSON.stringify(userData)); // Store session in localStorage
        } else {
          sessionStorage.setItem('userSession', JSON.stringify(userData)); // Store session in sessionStorage
        }
        navigate('/UserHome'); // Navigate to the home page on successful login
      })
      .catch(err => console.log(err));
  };
    const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUserSession = localStorage.getItem('userSession') || sessionStorage.getItem('userSession');
    if (storedUserSession) {
      setUser(JSON.parse(storedUserSession));
    }
  }, []);
  const navBar = localStorage.getItem('userSession') || sessionStorage.getItem('userSession') ? <NavBarUser/> : <NavBar />;
  return (
    <>
      {navBar}
      <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog" id="modalLogin">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2 text-dark">Login to your account</h1>
              <button type="button" className="btn-close" aria-label="Close" onClick={() => navigate('/')}></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-3"
                    placeholder="name@example.com"
                    onChange={handleInput}
                    required
                  />
                  <label htmlFor="floatingInput" className="text-dark">Email address</label>
                  
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control rounded-3"
                    placeholder="Password"
                    onChange={handleInput}
                    required
                  />
                  <label htmlFor="floatingPassword" className="text-dark">Password</label>
                
                </div>
                <div className="mb-3">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="input"
                    onChange={handleInput}
                  />
                  <label className="label" htmlFor="rememberMe">Keep me signed in</label>
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Login</button>
                <small className="text-body-secondary">Don't have an account? <Link to="/signup">Sign up</Link></small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
