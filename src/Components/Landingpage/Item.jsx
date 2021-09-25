import React from "react";

function Item(props){
    
    return(
        // <Link to="/profile" className="title__menu">{props.option}</Link>
        <a className="title__menu" href="#">{props.option}</a>
    )
}

export default Item;