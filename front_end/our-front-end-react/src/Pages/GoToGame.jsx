import React from 'react'
import NavBar from '../Components/NavBar'
function GoToGame(){
  return (
    <>
    <NavBar/>
    <div className = "container mt-3">
        <div className = "row justify-content-center">
            <div className = 'col-md-4'>
                <img src='../src\image.svg'></img>
            </div>
            <div className = 'col-md-4'>
                    <h1>Space Marine II</h1> 
                    <p>In Warhammer 40,000: Space Marine II, 
                        the player engages enemies using a mix of both melee and ranged combat 
                        from a third-person point of view. The player controls Titus, 
                        a lieutenant of the Ultramarines chapter and returning protagonist from the first game.</p>
            </div>
            <div className = 'col-md-2 mt-2'>
                    <h4>Year</h4> 
                    <p>2024</p>
            </div>
            <div className = 'col-md-2 mt-2'>
                    <h4>Developer</h4> 
                    <p>Saber Interactive</p>
            </div>
        </div>
        <div className = 'row justify-content-center'>
            <div className = 'col-md-4 text-center'>
                <h2>User Reviews</h2>
            </div>
        </div>
    </div>
    </>
  )
}
export default GoToGame
