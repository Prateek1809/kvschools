// src/components/AboutSection.jsx
import React from "react";

const AboutSection = () => {
  return (
    <section className="py-4">
      <div
        className="container-fluid"
        style={{
          border: "3px solid #BBBBBB",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <div className="row align-items-center">
          {/* Left Side - Text */}
          <div className="col-12 col-md-8 mb-3 mb-md-0 p-3">
            <div className="card border-0 h-100">
              <div className="card-body p-0">
                <h5 className="mb-3" style={{ textAlign: "justify" }}>
                  Embassy of India School (KV) Moscow is a vibrant educational
                  institution in Moscow catering to the educational needs of the
                  wards of the Embassy of India personnel and community of Indian
                  origin. The Ambassador of India to the Russian Federation,
                  H.E. Mr. Vinay Kumar is the Patron of the School. Mr. Nikhilesh
                  Giri, Deputy Chief of Mission, is the Chairperson of the School
                  Management Committee.
                </h5>
                <h5 className="mb-0" style={{ textAlign: "justify" }}>
                  The main objective of the School is to impart quality education
                  of an international standard, together with developing the
                  holistic personality of the child, to face the challenging
                  needs of the ever changing society. Established in the year
                  1987, today the school has a strength of a little over 270
                  students with classes I to XII and has Science and Commerce
                  streams. The school is affiliated to the Central Board of
                  Secondary Education (C.B.S.E), New Delhi and follows the
                  curriculum framed by NCERT, New Delhi, India.
                </h5>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-12 col-md-4">
            <div className="card border-0 h-100">
              <img
                src="/image/school.jpg"
                alt="Embassy of India School"
                className="img-fluid rounded w-100"
                style={{ objectFit: "cover", maxHeight: "320px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
