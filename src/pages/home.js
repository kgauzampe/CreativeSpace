import React, { useState } from "react";
import "./home.css";
import NavBar from "../components/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { motion } from "framer-motion";

export default function CreativeSpaceOnePager() {
  const text = "Where Creativity Meets Innovation";
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
        <div className="Nav">
            <NavBar />
        </div>

      {/* HERO */}
      <section className="hero">

        <div>
              <h1 className="typewriter">{text}</h1>
          <p>
            CREATIVE_SPACE is a forward-thinking design agency delivering
            innovative branding, marketing, design, ISO certification,
            and training solutions.
          </p>
          <br />
          {/* <a href="#about" className="cta-button">
            Learn More
          </a> */}
          <a href="/portfolio.pdf" download className="download-btn">
            Download Portfolio
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-light">
        <div className="container">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <h2>About Us</h2>
          </motion.div>
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
          {/* <p><strong>Reg No: 2025/267067/07</strong></p> */}
        </div>
      </section>
  {/* PREMIUM IMAGE CAROUSEL */}
<section className="premium-carousel">
  <Swiper
    modules={[EffectCoverflow, Autoplay, Navigation]}
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    navigation={true}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 2.5,
      slideShadows: false,
    }}
    className="mySwiper"
  >
    {[1,2,3,4,5,6].map((num) => (
      <SwiperSlide key={num}>
        <img
          src={`/img/c${num}.jpeg`}
          alt={`slide-${num}`}
          onClick={() => setSelectedImage(`/img/c${num}.jpeg`)}
          style={{ cursor: "pointer" }}
        />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* LIGHTBOX */}
  {selectedImage && (
    <div className="lightbox" onClick={() => setSelectedImage(null)}>
      <img src={selectedImage} alt="preview" />
    </div>
  )}
</section>

      {/* EXECUTIVE SUMMARY */}
      <section className="section section-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <h2>Executive Summary</h2>
          </motion.div>
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
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <h2>Our Services</h2>
            </motion.div>
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
      {/* IMAGE SLIDER */}
<section className="image-slider">
  <div className="slider-track">
    <img src="/img/c1.jpeg" alt="slide1" />
    <img src="/img/c2.jpeg" alt="slide2" />
    <img src="/img/c3.jpeg" alt="slide3" />
    <img src="/img/c4.jpeg" alt="slide4" />
    <img src="/img/c5.jpeg" alt="slide5" />
    <img src="/img/c6.jpeg" alt="slide6" />
    <img src="/img/c7.jpeg" alt="slide1" />
    <img src="/img/c8.jpeg" alt="slide2" />
    <img src="/img/c9.jpeg" alt="slide3" />
    <img src="/img/c10.jpeg" alt="slide4" />
    <img src="/img/c11.jpeg" alt="slide5" />
    <img src="/img/c12.jpeg" alt="slide6" />

    {/* duplicate for smooth loop */}
    {/* <img src="/img/c1.jpeg" alt="slide1" />
    <img src="/img/c2.jpeg" alt="slide2" />
    <img src="/img/c3.jpeg" alt="slide3" />
    <img src="/img/c4.jpeg" alt="slide4" />
    <img src="/img/c5.jpeg" alt="slide5" />
    <img src="/img/c6.jpeg" alt="slide6" /> */}
  </div>
</section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>CREATIVE_SPACE</h3>
        <p>Your Partner in Exceptional Design</p>
         <p>Developed By Mpumelelo Tech</p>
        <p>© {new Date().getFullYear()} | Reg 2025/267067/07</p>
      </footer>

    </div>
  );
}