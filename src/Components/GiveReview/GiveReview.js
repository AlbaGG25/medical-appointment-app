import React, { useState } from 'react';
import './GiveReview.css';

function GiveReview({doctor, onSubmit}) {

  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState('');
  const totalStars = 5;

  const handleButtonClick = () => {
    setShowForm(true);
  };


  const handleChange = (e) => {
   
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
      onSubmit(formData);
      setFormData({
        name: '',
        review: '',
        rating: 0,
      });
      setRating(0);
    } else {
      setShowWarning(true);
    }
  };

  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
    setFormData({ ...formData, rating: ratingValue });
  };

  return (
    <div className="form-review">
        <form onSubmit={handleSubmit} >
          <h2 className="form-review_title">Give Your Feedback</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <label htmlFor="rating">Rating:</label>
          <div className="rating-input">
          {[...Array(totalStars)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label key={index} >
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => handleRatingChange(currentRating)}
                />
                <span
                  className="star"
                  style={{
                    color:
                      currentRating <= (hover || rating)
                        ? "#ffc107"
                        : "#e4e5e9",
                  }}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                >
                  &#9733;
                </span>
              </label>
            );
          })}
        </div>
          <button type="submit">Submit</button>
        </form>
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReview;
