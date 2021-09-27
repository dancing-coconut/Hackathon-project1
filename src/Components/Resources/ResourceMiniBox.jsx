import React from "react";

function ResourceMiniBox(props){
    return(
        <div className="Resource__box">
            <h4 className="Rsrc__topic">{props.rsrctitle}</h4>
            <ul className="Rsrc__list">
                <li>Videos</li>
                <li>Articles</li>
                <li>Courses</li>
            </ul>
        </div>
    );
}
export default ResourceMiniBox;