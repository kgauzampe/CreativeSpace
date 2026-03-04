import React from "react";
import "./home.css";
import NavBar from "../components/NavBar";

export default function CreativeSpaceOnePager() {
  return (
    <div>
        <div className="Nav">
            <NavBar />
        </div>

      {/* HERO */}
      <section className="hero">

        <div>
            
          <h1>Where Creativity Meets Innovation</h1>
          <p>
            CREATIVE_SPACE is a forward-thinking design agency delivering
            innovative branding, marketing, design, ISO certification,
            and training solutions.
          </p>
          <br />
          <a href="#about" className="cta-button">
            Learn More
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-light">
        <div className="container">
          <h2>About Us</h2>
          <p>
            CREATIVE_SPACE is passionate about crafting innovative solutions
            that elevate brands and experiences. Built on creativity and
            strategy, we design solutions that inspire and connect.
          </p>
          <br />
          <p>
            With over 10 years of industry experience, we empower businesses
            to achieve sustainable growth through measurable results that
            enhance brand value and operational efficiency.
          </p>
          <br />
          <p><strong>Reg No: 2025/267067/07</strong></p>
        </div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section className="section section-gray">
        <div className="container">
          <h2>Executive Summary</h2>
          <p>
            We deliver cutting-edge branding, marketing, design,
            ISO certification, and training solutions tailored to each
            client’s unique needs.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section section-light">
        <div className="container">
          <h2>Our Services</h2>

          <div className="cards">
            <div className="card">
              <h3>Branding & Identity</h3>
              <p>Logos, brand guidelines, billboards and identity systems.</p>
            </div>

            <div className="card">
              <h3>Digital Design</h3>
              <p>Website design, email signatures, and social media visuals.</p>
            </div>

            <div className="card">
              <h3>Print Design</h3>
              <p>Brochures, posters, clothing and packaging design.</p>
            </div>

            <div className="card">
              <h3>Motion Graphics</h3>
              <p>Animation and video content for your brand story.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>CREATIVE_SPACE</h3>
        <p>Your Partner in Exceptional Design</p>
         <p>Powered By Mpumelelo Tech</p>
        <p>© {new Date().getFullYear()} | Reg 2025/267067/07</p>
      </footer>

    </div>
  );
}