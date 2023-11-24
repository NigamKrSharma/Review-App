import React, { useState } from "react";
import ReviewForm from "./Components/ReviewForm";
import ReviewsList from "./Components/ReviewList";

const App = () => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  return (
    <div className="app">
      <h1>Review Application</h1>
      <ReviewForm onReviewSubmit={handleReviewSubmit} />
      <ReviewsList reviews={reviews} onDeleteReview={handleDeleteReview} />
    </div>
  );
};

export default App;
