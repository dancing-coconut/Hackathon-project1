import React from "react";

function Item(props){
    const color1=props.color;
    return(
        <p className="title__menu" style={{color:color1}} href="/">{props.option}</p>
    )
}
export default Item;