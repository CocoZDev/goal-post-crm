import React from "react";
import "../../styles/HeroImage.css";

const HeroImage = () =>

<div>
    <div className="hero-container">
        <div className="hero-image">
            <div className="overlay">
            </div> 
        </div>
        <div className="hero-text">
            <h1 style={{color:'white'}}>Boost Your Sales Team's Productivity</h1>
            <p>With a number of useful and easy-to-use tools</p>
            <a href="/features" className="btn btn-primary btn-lg active learn-more" role="button" aria-pressed="true">Learn More</a>
        </div>
    </div>
</div>

export default HeroImage;
