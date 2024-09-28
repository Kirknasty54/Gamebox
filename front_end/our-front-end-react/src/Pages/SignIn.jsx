import React from 'react'
import "./SignIn.css"


const SignIn = () => {
  return (
        <div className='container'>
        <div className='row justify-content-center'>
        <div className = "p-5 mt-3 mb-4 bg-dark rounded-3" data-bs-theme='dark'>
            <div className='container-fluid py-5'>
                <h1 className='display-5 fw-bold text-light'>
                    Welcome to GameBox
                </h1>
                <p className = 'col-md-8 fs-4 text-light'>We are a group of dedicated 
                    gamers who are seeking to bring more poeple into the fold</p>
                <div className='col-md-4 justify-content-center'>
                    <input className='form-control mt-3' placeholder='Username'></input>
                    <input className='form-control mt-3' placeholder='Password'></input>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SignIn