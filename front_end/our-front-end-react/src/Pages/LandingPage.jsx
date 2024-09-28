import React from 'react'
import GameCards from '../Components/GameCards'
import NavBar from '../Components/NavBar'
function LandingPage() {
  return (
    <>
    <NavBar/>
    <div className = 'container px-4 py-5 my-5 text-center'>
        <h1 className = 'display-4 fw-bold text-center'>
            This is the Landing Page
        </h1>
        <div className = 'col-lg-6 mx-auto'>
            <p className = 'lead mb-4'>
                Quickly design and customize responsive mobile-first sites with Bootstrap, 
                the world’s most popular front-end open source toolkit, 
                featuring Sass variables and mixins, responsive grid system, 
                extensive prebuilt components, and powerful JavaScript plugins.
            </p>
        </div>
    </div>
    <div className = 'row'>
        <GameCards/>
        <GameCards/>
        <GameCards/>
        <GameCards/>
    </div>
    </>
  )
}

export default LandingPage
