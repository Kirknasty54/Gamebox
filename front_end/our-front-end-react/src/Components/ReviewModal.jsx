import React, { useState } from 'react';
import './ReviewModal.css';

const ReviewModal = ({ game, closeModal }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Review for ${game?.title}:`, { rating, review }); // Use optional chaining
    closeModal(); // Close modal after submission
  };

  if (!game) return null; // Prevent rendering if game is null or undefined

  return (
    <div className="review-modal">
      <div className="review-modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Review {game.title}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Rating:
            <input 
              type="number" 
              value={rating} 
              min="1" 
              max="5" 
              onChange={(e) => setRating(e.target.value)} 
            />
          </label>
          <label>
            Review:
            <textarea 
              value={review} 
              onChange={(e) => setReview(e.target.value)} 
            />
          </label>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
