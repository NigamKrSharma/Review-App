import React from "react";

const ReviewsList = ({ reviews, onDeleteReview }) => {
  return (
    <div className="review-container">
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong className="review-title">{review.title}</strong>
              <p>Rating: {review.rating}</p>
              {review.description && <p>Description: {review.description}</p>}
              <button className="dlt-btn" onClick={() => onDeleteReview(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewsList;
