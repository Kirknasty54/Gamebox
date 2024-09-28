import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../Components/Signupvalidation';
import axios from 'axios';
import NavBar from '../Components/NavBar';


const SignUp = () => {
    const [values, setValues] =useState({
        name:'',
        email:'',
        password:''
      })
      const[errors,setErrors] = useState({});
      const navigate = useNavigate();
    
      const handleInput = (event)=>{
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values)); // Set validation errors
    
        
        if (Object.keys(errors).length === 0) {
          axios.post('http://localhost:8080/Signup', values)
            .then(() => {
              navigate('/SignIn'); // Navigate to the login page on successful signup
            })
            .catch(err => console.log(err));
        }
      };
      return (
        <>
    <NavBar/>
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
      <div className='bg-white p-3 rounded w-25 text-black'>
        <h2>Sign-Up</h2>
        <form action = "" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className = 'text-black' htmlFor='name'>Name</label>
            <input type='text'
              placeholder='Enter Name'
              name='name'
              className='form-control rounded-0'
              onChange={handleInput}
            />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='email'
              placeholder='Enter Email'
              name='email'
              className='form-control rounded-0'
              onChange={handleInput}
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password'
              placeholder='Enter Password'
              className='form-control rounded-0'
              name='password'
              onChange={handleInput}
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button className='btn btn-success w-100 rounded-0 '>Sign up</button>
          <p>You agree to our terms and conditions</p>
<<<<<<< Updated upstream
          <Link to='/Login'>
            <button type='button' className='btn btn-dark text-black border w-100 bg-light rounded-0 text-decoration-none'>Login</button>
=======
          <Link to='/SignIn'>
            <button type='button' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</button>
>>>>>>> Stashed changes
          </Link>
        </form>
      </div>
    </div>
    </>
    )
}

export default SignUp