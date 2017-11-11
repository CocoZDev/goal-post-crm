import React from "react";
import "../../styles/Carousel.css";

const Carousel = () =>
<div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
    {/* <!-- Overlay --> */}
    <div className="overlay"></div>

    {/* <!-- Indicators --> */}
    <ol className="carousel-indicators">
    <li data-target="#bs-carousel" data-slide-to="0" className="active"></li>
    <li data-target="#bs-carousel" data-slide-to="1"></li>
    <li data-target="#bs-carousel" data-slide-to="2"></li>
    </ol>

    {/* <!-- Wrapper for slides --> */}
    <div className="carousel-inner" style={{color:'white'}}>
    <div className="item slides active">
        <div className="slide-1"></div>
        <div className="carousel-caption">
        <hgroup>
            <h1>We are convenient</h1>        
            <h3>Access all useful sales tools in one place.</h3>
        </hgroup>
        <button className="btn btn-hero btn-lg" role="button" style={{color:'white'}}><a href="/login">Join Us Today</a></button>
        </div>
    </div>
    <div className="item slides">
        <div className="slide-2"></div>
        <div className="carousel-caption">        
        <hgroup>
            <h1>We are efficient</h1>        
            <h3>Boost your sales team's productivity</h3>
        </hgroup>       
        <button className="btn btn-hero btn-lg" role="button">Join Us Today</button>
        </div>
    </div>
    <div className="item slides">
        <div className="slide-3"></div>
        <div className="carousel-caption">        
        <hgroup>
            <h1>We are mobile</h1>        
            <h3>Access your data from any device with Internet connection</h3>
        </hgroup>
        <button className="btn btn-hero btn-lg" role="button">Join Us Today</button>
        </div>
    </div>
    </div> 
</div>

export default Carousel;
