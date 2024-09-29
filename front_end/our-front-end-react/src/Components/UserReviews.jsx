import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
function UserReviews(){
    const[review, setReviews] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            try{
                const response = await axios.get(`/api/Reviews/${id}`);
                if(Array.isArray(response.data)){
                    setReviews(response.data);
                } else{
                    console.error('Response data is not an array:', response.data)
                    setReviews([]);
                }
            } catch(error){
                console.error('Error fetching game: ', error)
            }
        };
        getReviews();
    }, []); 

    const allReviews = Array(6).fill().map((_, index) => ({
        id: index,
        username: 'Username',
        title: 'Game Title',
        review: 'This is a review of the game space marine, I LOVE IT, it has been such a blast to play',
        date: 'Year',
        rating: '4/5'
    }));
  return (
    <div className = "container">
      {(review.length ? review : allReviews).map((review,index) =>(
        <>
        <div className = 'container-fluid border mb-3'>
      <div className = "row">
        <div className="col-md-4">
              <h6 className='text-start'>{review.username}</h6>
          </div>
          <div className = "col-md-2">
              <h7 className='text-start'>{review.date}</h7>
          </div>
          <div className = "col-md-2">
              <h7 className='text-start'>{review.rating}</h7>
          </div>
      </div>
      <div className = "row justify-content-center">
          <div className = "col-md-8">
              <p>{review.review}</p>
          </div>
      </div>
      </div>
      </>
      ))}
    </div>
  )
}
export default UserReviews
