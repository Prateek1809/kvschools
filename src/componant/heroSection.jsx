// src/components/HeroSection.jsx
import React from "react";
import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    <section>
      <Carousel fade interval={3000} controls indicators>
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/hero1.jpg" 
            alt="First slide"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold">Welcome to Our Website</h2>
            <p>Empowering Education & Innovation</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/hero2.jpg" 
            alt="Second slide"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold">Learn, Grow & Succeed</h2>
            <p>Modern Learning with Technology</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 (optional) */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/image/hero3.jpg"
            alt="Third slide"
            style={{ height: "80vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2 className="fw-bold">Global Opportunities</h2>
            <p>Connecting Knowledge Beyond Borders</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSection;
