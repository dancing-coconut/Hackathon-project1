import React from "react";
import NavigationBar from "../NavigationBar";
import AboutMe from "./AboutMe";

function ProfilePage(){
    return(
        <div>
            <NavigationBar itemcolor="white" bgcolor="#5B10A8" navtype="profile" />
            <AboutMe />
        </div>

    );
}

export default ProfilePage;