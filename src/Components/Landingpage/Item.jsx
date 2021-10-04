import React from "react";

// function hover(x){
//     x.style.background = "linear-gradient(242.75deg, #410C75 19.25%, #B638FF 67%)";
//     x.style.color = "#ffffff"
// }

function Item(props){
    const color1=props.color;
    return(
        <p className="title__menu" style={{color:color1,height:"72px"}} href="/">{props.option}</p>
    )
}
export default Item;