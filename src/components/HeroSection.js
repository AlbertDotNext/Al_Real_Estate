import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video1.mp4" autoPlay loop muted className="video" />
      <h1>DREAM HOUSE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
      <Button
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        WATCH TRAILER <i className="far fa-play-circle" />
      </Button>
    </div>
  );
}

export default HeroSection;
