import React, { useState } from "react";

const ReviewForm = ({ onReviewSubmit }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !rating) {
      alert("Title and Rating are required.");
      return;
    }

    const newReview = {
      title,
      rating: parseInt(rating),
      description,
    };

    onReviewSubmit(newReview);

    setTitle("");
    setRating("");
    setDescription("");
  };

  const handleReset = () => {
    setTitle("");
    setRating("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <h2>Give Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="rating">
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            min="1"
            max="5"
          />
        </div>
        <div className="text-area">
          <label>Description:</label>
          <textarea
            placeholder="Discription..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-btn">
          <button type="button" onClick={handleReset}>
            Reset
          </button>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
