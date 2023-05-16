import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../../component/image/home_page.png";
import "./heroSection.css";

function HeroSection({ headLine, description, alt }) {
  return (
    <div className="hero-section">
      <div className="hero-section-text-box">
        <h1 className="heading-primary">{headLine}</h1>
        <p className="paragraf-primary">{description}</p>
        <Link to="/penjelasan">
          <button className="btn-lihat-selengkapnya">Lihat Selengkapnya</button>
        </Link>
      </div>
      <div className="herosection-image">
        <img src={HeroImage} alt={alt} className="hero-image" />
      </div>
    </div>
  );
}

export default HeroSection;
