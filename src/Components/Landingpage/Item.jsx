import React from "react";

function Item(props){
    function changeHoverState(e){
        e.target.style.background = props.hoverbgcolor;
        e.target.style.color =  "#FFFFFF";
    }
    function changeHoverStateBack(e){
        e.target.style.background = props.bgcolor;
        e.target.style.color =  props.color;
    }
    const color1=props.color;
    return(
        <p onMouseOver={changeHoverState} onMouseOut={changeHoverStateBack} className="title__menu" style={{color:color1,height:"72px"}} href="/">{props.option}</p>
    )
}

export default Item;