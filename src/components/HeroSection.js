import React, { useState } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import VideoPopup from "./VideoPopup";

function HeroSection() {
  const [btnPopup, setBtnPopup] = useState(false);

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
        onClick={() => setBtnPopup(true)}
      >
        WATCH TRAILER <i className="far fa-play-circle" />
      </Button>
      <VideoPopup trigger={btnPopup} setTrigger={setBtnPopup}>
        <video src="/videos/video1.mp4" autoPlay />
      </VideoPopup>
    </div>
  );
}

export default HeroSection;
