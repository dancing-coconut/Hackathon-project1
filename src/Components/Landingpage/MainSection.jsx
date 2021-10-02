import React from "react";
import { Link } from "react-router-dom";

function MainSection() {
  return (
    <div className="MainContainer">
      <img className="mainsection__image" src="/Images/LandingPage/BackgroundImageMain.png" alt="Main" />
      <h1 className="title__main">Learn</h1>
      <p className="description__main">Cryptocurrency</p>
      <Link to="/InfoPage">
        <button type="button" className="button__main">
          <p className="buttondesc__main">Get Started Now</p>
        </button>
      </Link>
    </div>
  );
}

export default MainSection;
