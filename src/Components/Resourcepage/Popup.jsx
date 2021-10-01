import React from "react";

function Popup(props){
    return(
        <div className="PopupBox">
            <div className="PopupContent">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    );
}

export default Popup;