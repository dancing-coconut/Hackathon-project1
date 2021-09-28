import React from "react";
import Popup from "./Popup";
import { useState } from 'react';

//review this after learning useState
function ResourceMiniBox(props){
    const [isOpen, setIsOpen] = useState(false);
    function togglePopup(){
        setIsOpen(!isOpen);
    }
    return(
        <div className="Resource__box">
            <button className="Rsrc__button" onClick={togglePopup}>
                <h4 className="Rsrc__topic">{props.rsrctitle}</h4>
                {isOpen && <Popup content={
                    <>
                    <p className="Popup__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum.
                        </p>
                    </>}
                    handleClose={togglePopup}
                />}
            </button>
        </div>
    );
}
export default ResourceMiniBox;