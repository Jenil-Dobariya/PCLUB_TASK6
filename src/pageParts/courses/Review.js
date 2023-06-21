import React from "react";
import "./reviewDesign.css";

const Review = ({ review }) => {
  if (!review) {
    return null;
  }

  return (
    <div className="reviewContent">
      <div className="reviewTitle">
        <p>
          <strong>By</strong> {review.name || ""} ({review.batch || ""})
        </p>
      </div>
      <div className="reviewData">
        <p>
          <strong>Grading Type:</strong> {review.grading || ""}
        </p>
        <p>
          <strong>Difficulty Level:</strong> {review.difficulty || ""}
        </p>
        <p>
          <strong>Professor's Name:</strong> {review.professor || ""}
        </p>
        <p>
          <strong>Professor's Teaching Style:</strong>{" "}
          {review.teachingStyle || ""}
        </p>
        <p>
          <strong>Overall Rating:</strong> {review.overallRating || ""}
        </p>
      </div>
    </div>
  );
};

export default Review;
