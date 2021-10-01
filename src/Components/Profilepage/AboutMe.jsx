import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';


function AboutMe(props){
    return (
        <div>
            <AccountCircleIcon />
            <span>About Me</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            <img src="/Images/BitcoinTrans.png" alt="profile" />
            <span className="name__first">First Name</span>
            <span className="name__last">Last Name</span>
            <div className="aboutMe__icons">
                <LinkedInIcon />
                <LocationOnIcon />
                <FacebookRoundedIcon />
                <MailIcon />
                <InstagramIcon />
                <GitHubIcon /> 
            </div>
        
        </div>
    );
}

export default AboutMe;