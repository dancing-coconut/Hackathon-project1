import React from "react";
import NavigationBar from "../NavigationBar";
import AboutMe from "./AboutMe";
import MyBlogs from "./MyBlogs";
import Starred from "./Starred";
import ProgressBar from "./ProgressBar";
function ProfilePage(){
    return(
        <div>
            <NavigationBar itemcolor="white" bgcolor="#5B10A8" navtype="profile" />
            <AboutMe />
            <MyBlogs />
            <Starred />
            <ProgressBar />
        </div>
    );
}

export default ProfilePage;