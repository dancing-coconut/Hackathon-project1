import React from "react";
import Logo from "./Landingpage/Logo";
import Item from "./Landingpage/Item";
import {Link} from 'react-router-dom';


function Profilenavbar(props){
    return(
        <div style={{backgroundColor:props.bgcolor}} className="menu__items--div">
            <Logo color={props.itemcolor}/>
            <div className="menu__items--container">
                <Link to=''><Item color={props.itemcolor} option="Progress"/></Link>
                <Link to=''><Item color={props.itemcolor} option="Starred"/></Link>
                <Link to=''><Item color={props.itemcolor} option="Blogs"/></Link>
                <Link to=''><Item color={props.itemcolor} option="About"/></Link>
            </div>
        </div>
    );    
}

function NavigationBar(props) {
    console.log(props.navtype);
    if(props.navtype==="profile"){
        return(
            <Profilenavbar itemcolor={props.itemcolor} bgcolor={props.bgcolor} />
        );
    }
    else {
        console.log(props.bgcolor,props.itemcolor);
        console.log("hey");
        return(
            <div style={{backgroundColor:props.bgcolor}}>
                <Logo color={props.itemcolor}/>
                <ul className="MenuOptions">
                    <Link to='/ProfilePage'><li className="item1"><Item color={props.itemcolor} option="Profile"/></li></Link>
                    <Link to=''><li className="item2"><Item color={props.itemcolor} option="Contact"/></li></Link>
                    <Link to=''><li className="item3"><Item color={props.itemcolor} option="Explore"/></li></Link>
                </ul>
            </div>
        );
    }    
}

export default NavigationBar;