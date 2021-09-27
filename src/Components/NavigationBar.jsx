import React from "react";
import Logo from "./Landingpage/Logo";
import Item from "./Landingpage/Item";
import {Link} from 'react-router-dom';

function NavigationBar(props) {
    return(
        <div>
            <Logo color={props.itemcolor}/>
            <ul className="MenuOptions">
                <Link to=''><li className="item1"><Item color={props.itemcolor} option="Profile"/></li></Link>
                <Link to=''><li className="item2"><Item color={props.itemcolor} option="Contact "/></li></Link>
                <Link to=''><li className="item3"><Item color={props.itemcolor} option="Explore"/></li></Link>
            </ul>
        </div>
    );
}

export default NavigationBar;