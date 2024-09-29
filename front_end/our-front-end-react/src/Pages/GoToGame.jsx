import React, { useEffect ,useState } from 'react'
import NavBar from '../Components/NavBar'
import UserReviews from '../Components/UserReviews';
import axios from 'axios'
import './GoToGame.css'
function GoToGame(){

    const[games, setGames] = useState([]);
    useEffect(() => {
        const getGames = async () => {
            try{
                const response = await axios.get(`/api/GetGame/${id}`);
                if(Array.isArray(response.data)){
                    setGames(response.data);
                } else{
                    console.error('Response data is not an array:', response.data)
                    setGames([]);
                }
            } catch(error){
                console.error('Error fetching game: ', error)
            }
        };
        getGames();
    }, []); 

    const game = Array(1).fill().map((_, index) => ({
        id: index,
        title: 'Game Title',
        description: 'Games Description',
        year: 'Year',
        developer: 'A Developer'
    }));
  return (
    <>
    <NavBar/>
    <div className = "container-fluid mt-3">
        {(game.length ? game : games).map((item,index) =>(
        <>
        <div className = "row justify-content-center" key = {index}>
            <input type = "hidden" value = {item.id}></input>
                <div className = 'col-md-4'>
                    <img src='../src\image.svg'></img>
                </div>
                <div className = 'col-md-4'>
                        <h1>{item.title}</h1> 
                        <p>{item.description}</p>
                </div>
                <div className = 'col-md-2 mt-2'>
                        <h4>Year</h4> 
                        <p>{item.year}</p>
                </div>
                <div className = 'col-md-2 mt-2'>
                        <h4>Developer</h4> 
                        <p>{item.developer}</p>
                </div>
        </div>
        </>
        ))}
        <div className = 'row mt-3 justify-content-end bg-white'>
            <div className = 'col-md-12 text-center'>
                <h2 className="text-black mt-2" style={{ fontFamily: 'Geist' }}>User Reviews</h2>
                <UserReviews/>
            </div>
        </div>
    </div>
    </>
  )
}
export default GoToGame
