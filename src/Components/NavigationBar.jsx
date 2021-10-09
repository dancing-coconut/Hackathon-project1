import React from "react";
import Logo from "./Landingpage/Logo";
import Item from "./Landingpage/Item";
import { Link } from "react-router-dom";

function Profilenavbar(props) {
  return (
    <div style={{ backgroundColor: props.bgcolor }} className="menu__items--div">
      <Logo color={props.itemcolor} />
      <div className="menu__items--container">
        <Link to="">
          <Item color={props.itemcolor} option="About" bgcolor={props.bgcolor}/>
        </Link>
        <Link to="">
          <Item color={props.itemcolor} option="Blogs" bgcolor={props.bgcolor}/>
        </Link>
        <Link to="">
          <Item color={props.itemcolor} option="Starred" bgcolor={props.bgcolor}/>
        </Link>
        <Link to="">
          <Item color={props.itemcolor} option="Progress" bgcolor={props.bgcolor}/>
        </Link>
      </div>
    </div>
  );
}

function Normalnavbar(props) {
  return (
    <div style={{ backgroundColor: props.bgcolor }}>
      <Logo color={props.itemcolor} />
      <ul className="MenuOptions">
        <Link to="/ProfilePage">
          <li className="item1">
            <Item color={props.itemcolor} option="Profile" bgcolor={props.bgcolor} hoverbgcolor={props.hoverbgcolor}/>
          </li>
        </Link>
        <Link to="">
          <li className="item2">
            <Item color={props.itemcolor} option="Contact" bgcolor={props.bgcolor} hoverbgcolor={props.hoverbgcolor}/>
          </li>
        </Link>
        <Link to="">
          <li className="item3">
            <Item color={props.itemcolor} option="Explore" bgcolor={props.bgcolor} hoverbgcolor={props.hoverbgcolor}/>
          </li>
        </Link>
      </ul>
    </div>
  );
}

function NavigationBar(props) {
  if (props.navtype === "profile") {
    return <Profilenavbar itemcolor={props.itemcolor} bgcolor={props.bgcolor} />;
  } else {
    return <Normalnavbar itemcolor={props.itemcolor} bgcolor={props.bgcolor} />;
  }
}

export default NavigationBar;
