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