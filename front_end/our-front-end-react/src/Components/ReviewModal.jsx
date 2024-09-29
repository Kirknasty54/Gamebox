import React, { useState } from 'react';
import './ReviewModal.css';

const ReviewModal = ({ game, closeModal }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Review for ${game?.title}:`, { rating, review });
    closeModal();
  };

  if (!game) return null;

  return (
    <div className="review-modal">
      <div className="review-modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 className="modal-title">Review {game.title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Rating:</label>
            <input 
              type="number" 
              value={rating} 
              min="1" 
              max="5" 
              onChange={(e) => setRating(Number(e.target.value))} 
              className="rating-input"
            />
          </div>
          <div className="form-group">
            <label>Review:</label>
            <textarea 
              value={review} 
              onChange={(e) => setReview(e.target.value)} 
              className="review-textarea"
            />
          </div>
          <button type="submit" className="submit-button">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
