import React, { useState } from "react";
import "./feedbackFormDesign.css";

const FeedbackForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    batch: "",
    grading: "",
    difficulty: "",
    professor: "",
    teachingStyle: "",
    overallRating: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      batch: "",
      grading: "",
      difficulty: "",
      professor: "",
      teachingStyle: "",
      overallRating: ""
    });
  };

  const validateBatch = (value) => {
    const isValid = /^Y\d+$/.test(value);
    const batchInput = document.getElementById("batch");

    if (!isValid) {
      batchInput.setCustomValidity("Please enter a valid batch (e.g., Y22)");
    } else {
      batchInput.setCustomValidity("");
    }

    return isValid;
  };

  return (
    <form onSubmit={handleSubmit} className="feedback">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <label htmlFor="batch">Batch:</label>
      <input
        type="text"
        id="batch"
        name="batch"
        pattern="^Y\d+$"
        placeholder="e.g., Y22"
        value={formData.batch}
        onChange={handleChange}
        onInvalid={(e) => validateBatch(e.target.value)}
        required
      />
      <br />
      <br />

      <label htmlFor="grading">Grading Type:</label>
      <input
        type="text"
        id="grading"
        name="grading"
        placeholder="e.g., B centric"
        value={formData.grading}
        onChange={handleChange}
      />
      <br />
      <br />

      <label htmlFor="difficulty">Difficulty Level:</label>
      <input
        type="number"
        id="difficulty"
        name="difficulty"
        min="0"
        max="10"
        placeholder="0-10"
        value={formData.difficulty}
        onChange={handleChange}
      />
      <br />
      <br />

      <label htmlFor="professor">Professor's Name:</label>
      <input
        type="text"
        id="professor"
        name="professor"
        placeholder="Enter Professor's name"
        value={formData.professor}
        onChange={handleChange}
      />
      <br />
      <br />

      <label htmlFor="teachingStyle">Professor's Teaching Style:</label>
      <input
        type="number"
        id="teachingStyle"
        name="teachingStyle"
        min="0"
        max="10"
        placeholder="0-10"
        value={formData.teachingStyle}
        onChange={handleChange}
      />
      <br />
      <br />

      <label htmlFor="overallRating">Overall Rating:</label>
      <input
        type="number"
        id="overallRating"
        name="overallRating"
        min="0"
        max="10"
        placeholder="0-10"
        value={formData.overallRating}
        onChange={handleChange}
      />
      <br />
      <br />

      <div className="submitButton">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default FeedbackForm;
