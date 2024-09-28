import React, {useState,useEffect} from 'react'
import "./SignIn.css"
import NavBar from '../Components/NavBar'
import axios from 'axios'
import Validation from '../Components/Validation'



const SignIn = () => {
    const [post, setPost] = useState({
        username: '',
        password: '',
        
    });
    
    function handleSubmit(event){
        event.preventDefault()
        setErrors(Validation(post))
        axios.post("http://localhost:8080/addRun", post)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

  return (
    <>
    <NavBar/>
        <div className = "Signin">
            <form action={handleSubmit}>
                <input type = "text"
                className='form-control'
                placeholder='Username'
                name = "username"
                value = {post.title}
                onChange = {e => {setPost({...post, title: e.target.value});
                }}
                />

                <input type = {"text"}
                className='form-control'
                placeholder='password'
                name = "password"
                value = {post.start}
                onChange = {e => {setPost({...post, start: e.target.value});
                 }}
                />
            </form>

            <button onClick = {(e) => handleSubmit(e)} className = "btn btn-primary">
                Submit
            </button>
        </div>
   </>  
  )
}

export default SignIn