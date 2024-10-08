import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../Components/Signupvalidation'; // Assume this is your validation logic
import axios from 'axios';
import Navbar from "../Components/NavBar"

const SignUp = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios.post('https://gameboxusa.com/api/v1/users/register', values)
        .then(() => {
          navigate('/profile'); // Navigate to the login page on successful signup
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      <Navbar />
      <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2 text-dark">Sign up for free</h1>
              <button type="button" className="btn-close" aria-label="Close" onClick={() => navigate('/')}></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="username"
                    className="form-control rounded-3"
                    placeholder="Enter Username"
                    onChange={handleInput}
                  />
                  <label htmlFor="floatingInput" className="text-dark">Username</label>
                  {errors.username && <span className="text-danger">{errors.username}</span>}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-3"
                    placeholder="name@example.com"
                    onChange={handleInput}
                  />
                  <label htmlFor="floatingInput" className="text-dark">Email address</label>
                  {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control rounded-3"
                    placeholder="Password"
                    onChange={handleInput}
                  />
                  <label htmlFor="floatingPassword" className="text-dark">Password</label>
                  {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
                <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                <hr className="my-4" />
                <h2 className="fs-5 fw-bold mb-3 text-dark">Or use a third-party</h2>
                <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                  <svg className="bi me-1" width="16" height="16"><use xlinkHref="#twitter"></use></svg>
                  Sign up with Twitter
                </button>
                <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="button">
                  <svg className="bi me-1" width="16" height="16"><use xlinkHref="#facebook"></use></svg>
                  Sign up with Facebook
                </button>
                <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                  <svg className="bi me-1" width="16" height="16"><use xlinkHref="#github"></use></svg>
                  Sign up with GitHub
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
