import React, { useState } from "react";
import Review from "./Review";
import FeedbackForm from "./FeedbackForm";
import DropdownMenu from "./DropDown";
import "./coursesDesign.css";

function CourseTemplate(props) {
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (formData) => {
    const newReview = { ...formData };
    setReviews((prevReviews) => [...prevReviews, newReview]);
    alert("review added successfully");
  };

  const [newLink, setNewLink] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newMenu, setNewMenu] = useState("Lecture Notes");
  const [newDataLN, setNewDataLN] = useState([]);
  const [newDataAssign, setNewDataAssign] = useState([]);
  const [newDataQuiz, setNewDataQuiz] = useState([]);
  const [newDataMidSem, setNewDataMidSem] = useState([]);
  const [newDataEndSem, setNewDataEndSem] = useState([]);

  const handleAddLink = () => {
    if (newLink === "" || newTitle === "") {
      alert("Please add title and link");
    } else {
      const data = {
        link: newLink,
        title: newTitle,
        menuTitle: newMenu,
      };

      if (newMenu === "Lecture Notes") {
        setNewDataLN([...newDataLN, data]);
      } else if (newMenu === "Assignments") {
        setNewDataAssign([...newDataAssign, data]);
      } else if (newMenu === "Quiz") {
        setNewDataQuiz([...newDataQuiz, data]);
      } else if (newMenu === "MidSem") {
        setNewDataMidSem([...newDataMidSem, data]);
      } else if (newMenu === "EndSem") {
        setNewDataEndSem([...newDataEndSem, data]);
      }

      setNewLink("");
      setNewTitle("");
      setNewMenu("Lecture Notes");
      alert("Link added successfully");
    }
  };

  return (
    <div className="links">
      <div className="content">
        <div className="resources">
          <h1>
            {props.courseCode} : {props.courseName}{" "}
          </h1>
          <DropdownMenu menuTitle="Lecture Notes" data={newDataLN} />
          <DropdownMenu menuTitle="Assignments" data={newDataAssign} />
          <DropdownMenu menuTitle="Quiz" data={newDataQuiz} />
          <DropdownMenu menuTitle="MidSem" data={newDataMidSem} />
          <DropdownMenu menuTitle="EndSem" data={newDataEndSem} />

          <h3>Add Resources</h3>

          <div className="resources-input">
            <select
              value={newMenu}
              onChange={(e) => setNewMenu(e.target.value)}
            >
              <option value="Lecture Notes">Lecture Notes</option>
              <option value="Assignments">Assignments</option>
              <option value="Quiz">Quiz</option>
              <option value="MidSem">MidSem</option>
              <option value="EndSem">EndSem</option>
            </select>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter a title"
            />
            <input
              type="text"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              placeholder="Enter a drive link"
            />
            <button onClick={handleAddLink}>Add Link</button>
          </div>
        </div>
        <div className="separator"></div>
        <div className="review">
          <h3>Enter Your review here</h3>
          <FeedbackForm onSubmit={handleSubmit} />
          <div className="reviewContent">
            <div className="reviewTitle">
              <p>
                <strong>By</strong> Jenil (Y22)
              </p>
            </div>
            <div className="reviewData">
              <p>
                <strong>Grading Type:</strong> dummy
              </p>
              <p>
                <strong>Difficulty Level:</strong> 10
              </p>
              <p>
                <strong>Professor's Name:</strong> dummy
              </p>
              <p>
                <strong>Professor's Teaching Style:</strong> 0
              </p>
              <p>
                <strong>Overall Rating:</strong> 0
              </p>
            </div>
          </div>
          {reviews.length > 0 && (
            <div>
              <h2>All Reviews</h2>
              {reviews.map((review, index) => (
                <Review key={index} review={review} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseTemplate;
