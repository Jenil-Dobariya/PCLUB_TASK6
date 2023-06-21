import React from "react";
import CourseTemplate from "./courses/CourseTemplate";
import "./bodyDesign.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function BodyComp() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="course">
        <div className="child">
          <Link to="/ESC111M" style={{ "text-decoration": "none" }}>
            <h3>ESC111M</h3>
            <p>Fundamentals of Computing-1</p>
          </Link>
        </div>
        <Routes>
          <Route
            path="/ESC111M"
            element={
              <CourseTemplate
                courseCode="ESC111M"
                courseName="Fundamental of Computing-1"
              />
            }
          />
        </Routes>

        <div className="child">
          <Link to="/ESC112M" style={{ "text-decoration": "none" }}>
            <h3>ESC112M</h3>
            <p>Fundamentals of Computing-2</p>
          </Link>
        </div>
        <Routes>
          <Route
            path="/ESC112M"
            element={
              <CourseTemplate
                courseCode="ESC112M"
                courseName="Fundamental of Computing-2"
              />
            }
          />
        </Routes>

        <div className="child">
          <Link to="/MTH111M" style={{ "text-decoration": "none" }}>
            <h3>MTH111M</h3>
            <p>SINGLE VARIABLE CALCULUS</p>
          </Link>
        </div>
        <Routes>
          <Route
            path="/MTH111M"
            element={
              <CourseTemplate
                courseCode="MTH111M"
                courseName="SINGLE VARIABLE CALCULUS"
              />
            }
          />
        </Routes>

        <div className="child">
          <Link to="/MTH112M" style={{ "text-decoration": "none" }}>
            <h3>MTH112M</h3>
            <p>
              APPLICATION OF SINGLE VARIABLE CALCULUS & SEVERAL VARIABLE
              CALCULUS
            </p>
          </Link>
        </div>
        <Routes>
          <Route
            path="/MTH112M"
            element={
              <CourseTemplate
                courseCode="MTH112M"
                courseName="APPLICATION OF SINGLE VARIABLE CALCULUS & SEVERAL VARIABLE
                CALCULUS"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default BodyComp;
