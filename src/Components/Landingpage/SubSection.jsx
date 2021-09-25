import React from "react";

function SubSection(props){
    const classname = "sub_img";
    const classname1 = "title__sub";
    const classname2 = `title__sub ${classname1.concat(props.title)}`;
    return(
        <div className="subsection">
            <img className={classname.concat(props.title)} src={props.bgUrl} alt={props.alt} />
            <span className={classname2}>{props.title}</span>
        </div>
    );
}

export default SubSection;

