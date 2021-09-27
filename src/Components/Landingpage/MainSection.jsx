import React from "react";

function MainSection(){
    return(
        <div className="MainContainer">
            <img className="mainsection__image" src='/Images/LandingPage/BackgroundImageMain.png' alt="Main"/>
            <h1 className="title__main">Learn</h1>
            <p className="description__main">Cryptocurrency</p>
            <button type="button" className="button__main">
                <p className="buttondesc__main">Get Started Now</p>
            </button>
        </div>
    );
}

export default MainSection;