// src/components/NoticeBoard.jsx
import React from "react";
import "./style.css"; // custom css import

const NoticeBoard = () => {
  return (
    <section className="py-4 bg-light">
      <div className="container-fluid">
        <div className="row g-3">
          {/* Announcements */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100 overflow-hidden">
              <div className="card-header bg-success text-white fw-bold">
                <h4>Announcements</h4>
              </div>
              <div className="card-body  notice-scroll">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">
                      Split-up syllabus Oct 2023–Mar 2024 for Primary Section
                      Classes
                    </a>
                  </li>
                  <li>
                    <a href="#">SPLIT-UP SYLLABUS IX 2023–24</a>
                  </li>
                  <li>
                    <a href="#">Exam Schedule 2024</a>
                  </li>
                  <li>
                    <a href="#">Holiday List 2024</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Downloads */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100 overflow-hidden">
              <div className="card-header bg-success text-white fw-bold">
                <h4>Downloads</h4>
              </div>
              <div className="card-body  notice-scroll">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">
                      Be Safe in Cyber World (Teachers){" "}
                      <span className="badge bg-danger">new!</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Be Safe in Cyber World (Students){" "}
                      <span className="badge bg-danger">new!</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">Basics of Cyber Safety & Security</a>
                  </li>
                  <li>
                    <a href="#">
                      Cyber Safety (Parents){" "}
                      <span className="badge bg-danger">new!</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Links */}
<div className="col-md-4">
  <div className="card shadow-sm h-100 overflow-hidden">
    <div className="card-header bg-success text-white fw-bold">
      <h4>Important Links</h4>
    </div>
    <div className="card-body notice-scroll">
      <ul className="list-unstyled mb-0">
        <li><a href="#">Revised Curriculum 2023–24</a></li>
        <li><a href="#">Senior School Curriculum & Question Papers 2023–24</a></li>
        <li><a href="#">DIKSHA CLASSES I to XII</a></li>
        <li><a href="#">Virtual Learning</a></li>
        <li><a href="#">Gyan Kosh</a></li>
        <li><a href="#">Photo Gallery</a></li>
      </ul>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
