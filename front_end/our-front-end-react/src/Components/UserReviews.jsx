import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './UserReviews.css';  // Make sure you include this line for your CSS file

function UserReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get(`/api/Reviews/${id}`);
        if (Array.isArray(response.data)) {
          setReviews(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
          setReviews([]);
        }
      } catch (error) {
        console.error('Error fetching game: ', error);
      }
    };
    getReviews();
  }, []);

  const allReviews = Array(6).fill().map((_, index) => ({
    id: index,
    username: 'Username',
    title: 'Game Title',
    review: 'This is a review of the game Space Marine. I LOVE IT! It has been such a blast to play.',
    date: '2023-07-14',
    rating: '4/5'
  }));

  return (
    <div className="review-container">
      {(reviews.length ? reviews : allReviews).map((review, index) => (
        <div key={index} className="review-card">
          <div className="review-header">
            <h5 className="review-username text-black">{review.username}</h5>
            <p className="review-date">{review.date}</p>
          </div>
          <div className="review-body">
            <h6 className="review-title">{review.title}</h6>
            <p className="review-text">{review.review}</p>
          </div>
          <div className="review-footer">
            <span className="review-rating">{review.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserReviews;
