import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignUp from "./SignUp.jsx";

function MainSection() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleSignup() {
    setIsOpen(!isOpen);
    console.log(isOpen)
  }
  return (
    <div className="MainContainer">
      <img className="mainsection__image" src="/Images/LandingPage/BackgroundImageMain.png" alt="Main" />
      <h1 className="title__main">Learn</h1>
      <p className="description__main">Cryptocurrency</p>
      <button type="button" className="button__main" onClick={toggleSignup}>
        <p className="buttondesc__main">Get Started Now</p>
        {isOpen && (
          <SignUp
            signup={
              <>
                <div className="Signup___content">
                  <input type="text" placeholder="Name" className="Signup__section" />
                  <input type="email" placeholder="E-mail" className="Signup__section" />
                  <input type="password" placeholder="Password" className="Signup__section" />
                </div>
              </>
            }
            handleClose1={toggleSignup} isOpenVal={isOpen}
          />
        )}
      </button>
    </div>
  );
}

export default MainSection;
