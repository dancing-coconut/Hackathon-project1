import React from "react";

function Item(props){
    const color1=props.color;
    console.log(color1);
    return(
        // <Link to="/profile" className="title__menu">{props.option}</Link>
        <a className="title__menu" style={{color:color1}} href="#">{props.option}</a>
    )
}
export default Item;