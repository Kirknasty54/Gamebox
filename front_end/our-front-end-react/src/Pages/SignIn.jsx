import React, {useState,useEffect} from 'react'
import "./SignIn.css"
import NavBar from '../Components/NavBar'
import axios from 'axios'
import Validation from '../Components/Validation'
import {Link} from 'react-router-dom';


const SignIn = () => {
    const [values, setValues] =useState({
        email:'',
        passwords:''
      })
      const[errors,setErrors] = useState({})
      const handleInput = (event)=>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
      }
      const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
      }
      return (
        <>
       <NavBar/>
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-in</h2>
          <form action='' onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                 <input 
                 type='email' 
                 placeholder='Enter Email'
                 onChange={handleInput} 
                  name='email'
                  className='form-control rounded-0'
                  />
                  {errors.email && <span className='text-danger'>{errors.email}</span>}
              </div>
              <div className='mb-3'>
                <label htmlFor='password'>Password</label>
                 <input 
                 type='password' 
                 placeholder='Enter Password' 
                 name='password'
                 className='form-control rounded-0'
                 onChange={handleInput}
                 />
                 {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>
              <button type='submit'className='btn btn-sucesss w-100 rounded-0'>Login</button>
              <p>You are agree to are terms </p>
              <Link to='/Signup'><button className='btn btn-default border'>Create Account</button> </Link>
            </form>
        </div>
        </div>
        </>
      )
}

export default SignIn