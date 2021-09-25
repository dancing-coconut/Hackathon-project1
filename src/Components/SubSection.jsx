import React from "react";

function SubSection(props){
    const classname = "sub_img";
    return(
        <div className="subsection">
            <img className={classname.concat(props.title)} src={props.bgUrl} alt={props.alt} />
            <span className="title__sub">{props.title}</span>
        </div>
    );
}

export default SubSection;

