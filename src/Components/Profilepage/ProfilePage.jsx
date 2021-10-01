import React from "react";
import NavigationBar from "../NavigationBar";
import AboutMe from "./AboutMe";
import MyBlogs from "./MyBlogs";

function ProfilePage(){
    return(
        <div>
            <NavigationBar itemcolor="white" bgcolor="#5B10A8" navtype="profile" />
            <AboutMe />
            <MyBlogs />
        </div>
    );
}

export default ProfilePage;