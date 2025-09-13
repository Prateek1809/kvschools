// src/components/PrincipalSection.jsx
import React from "react";

const PrincipalSection = () => {
  return (
    <section className="py-4">
      <div className="container-fluid">
        <div className="row g-4">
          {/* Patrons */}
          <div className="col-12 col-md-3">
            <div className="card border-0  h-100">
                <h3>Patrons</h3>
              <img
                src="/image/chief.jpg"
                alt="Patron"
                className="card-img-top img-fluid"
                style={{ objectFit: "cover", height: "300px" }}
              />
              <div className="card-body text-center">
                <h6 className="fw-bold">
                  Deputy Chief of Mission and Chairperson SMC, EOIS, Moscow
                </h6>
                <p className="mb-0">Mr. Nikhilesh Giri</p>
              </div>
            </div>
          </div>

          {/* Principal */}
          <div className="col-12 col-md-3">
            <div className="card border-0  h-100">
                <h3>Principal</h3>
              <img
                src="/image/principal.jpg"
                alt="Principal"
                className="card-img-top img-fluid"
                style={{ objectFit: "cover", height: "300px" }}
              />
              <div className="card-body text-center">
                <h6 className="fw-bold">
                  Mr. BIGHNESWAR PATNAIK,
                  <br /> M.A., M.Ed., PGDGC, PGDDE
                </h6>
              </div>
            </div>
          </div>

          {/* From Principal’s Desk */}
          <div className="col-12 col-md-6">
            <div className="card  border-0 ">
              <div className="card-body">
                <h3 className="fw-bold mb-3">From Principal&apos;s Desk</h3>
                <p style={{ textAlign: "justify" }}>
                  Welcome to the website of Embassy Of India School (KV), Moscow.
                  Website provides comprehensive view about the formation and
                  growth and functioning of the Vidyalaya in all areas of
                  schooling. The budding Vidyalaya which was established in 1987
                  to cater to the Educational needs of wards of Embassy of India
                  personnel and community of Indian origin is today blossomed
                  into a full-fledged school with classes I to XII. The school
                  offers Science and Commerce streams at +2 level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalSection;
