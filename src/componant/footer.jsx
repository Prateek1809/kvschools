// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* At a Glance */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 border-bottom pb-2">
              At a Glance
            </h5>
            <ul className="list-unstyled small">
              <li>CBSE Affiliation No.: <strong>7000001</strong></li>
              <li>Classes: <strong>XII</strong></li>
              <li>Streams: Science & Commerce</li>
              <li>Total Strength: 228</li>
              <li>Established: 1987</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 border-bottom pb-2">
              Quick Links
            </h5>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">Staff List</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Fee Payment</a></li>
              <li><a href="#" className="text-light text-decoration-none">Photo Gallery</a></li>
              <li><a href="#" className="text-light text-decoration-none">Downloads</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 border-bottom pb-2">
              Important Links
            </h5>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">Admission Portal</a></li>
              <li><a href="#" className="text-light text-decoration-none">Kendriya Vidyalaya Sangathan</a></li>
              <li><a href="#" className="text-light text-decoration-none">KVS RO KVS HQ</a></li>
              <li><a href="#" className="text-light text-decoration-none">KVS Transfer Portal</a></li>
              <li><a href="#" className="text-light text-decoration-none">KVS Sports Portal</a></li>
            </ul>
          </div>

          {/* Utilities */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 border-bottom pb-2">
              Utilities
            </h5>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">Site Map</a></li>
              <li><a href="#" className="text-light text-decoration-none">Disclaimer</a></li>
              <li><a href="#" className="text-light text-decoration-none">Visitor’s Guide</a></li>
              <li><a href="#" className="text-light text-decoration-none">Report a Bug</a></li>
              <li><a href="#" className="text-light text-decoration-none">KVCMSx6</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-light" />

        {/* Bottom Bar */}
        <div className="text-center small">
          <p className="mb-0">
            Contents of this website are managed by <strong>Ramesh C. Thakur, PGT (Comp. Science)</strong>
          </p>
          <p className="mb-0">&copy; {new Date().getFullYear()} Powered with <span className="fw-bold">UniCMS x6</span>. A Medialab® product.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
