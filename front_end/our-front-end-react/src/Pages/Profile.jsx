import React from 'react'
import NavBar from '../Components/NavBarUser'



function Profile(){
  return (
    <>
    <NavBar/>
    <div className = "container">
      <div className ="row">
        <div className = "col-md-3">
          <h1>Username</h1>
        </div>
      </div>
      <div className = "row justify-content-center">
        <div className = "col-md-8 align-self-center mt-2">
          <h4>My Favorite Games</h4>
          <hr></hr>
        </div>
      </div>
        <div className = "row justify-content-center">
          <div className = "col-md-8 align-self-center mt-2">
            <h4>My Recent Reviews</h4>
            <hr></hr>
        </div>
      </div>
              <div className = "row justify-content-center">
          <div className = "col-md-8 align-self-center mt-2">
            <h4>My Lists</h4>
            <hr></hr>
        </div>
      </div>
    </div>

    </>
  )
}

export default Profile