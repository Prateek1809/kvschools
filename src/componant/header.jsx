// src/components/Header.js
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
<div className="bg-white border-bottom shadow-sm">
  {/* Top Info Bar */}
  <div className="d-flex justify-content-between align-items-center px-3 py-2 bg-success text-white small">
    <div>
      <strong>Phone:</strong> 8 – 499 243 70 09
    </div>
    <div>
      <strong>Email:</strong> principalkvm@mail.ru
    </div>
  </div>

  {/* Logo & Title */}
  <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between px-3 py-3">
    <div className="d-flex align-items-center text-center text-lg-start">
      {/* Logo only visible on large screens */}
      <img
        src="/image/header-left.png"
        alt="KV Logo"
        className="d-none d-lg-block" // 👈 This will hide logo in small/medium
        style={{ height: "100px", marginRight: "15px" }}
      />

      <div>
        <h3 className="mb-1 fw-bold">
          Embassy of India School (Kendriya Vidyalaya), Moscow, Russia
        </h3>
        <h4 className="mb-1" style={{ fontSize: "18px" }}>
          भारतीय राजदूतावास स्कूल (केन्द्रीय विद्यालय), मास्को, रूस
        </h4>
        <p className="mb-0 text-muted" style={{ fontSize: "18px" }}>
          Kendriya Vidyalaya, Moscow Affiliation No.: 7000001 | School Code: 90224
        </p>
      </div>
    </div>

    {/* Saraswati Image */}
    <div className="mt-3 mt-lg-0">
      <img
        src="/image/header-right.png"
        alt="Saraswati Maa"
        style={{ height: "120px" }}
      />
    </div>
  </div>
</div>

  );
};

export default Header;
