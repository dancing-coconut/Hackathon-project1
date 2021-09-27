import React from "react";
import ResourceMiniBox from "ResourceMiniBox";

function ResourceSection(props){
    return(
        <div>
            <h2>{props.rsrcname}</h2>
            <div className="Row1">
                <ResourceMiniBox />
                <ResourceMiniBox />
                <ResourceMiniBox />
            </div> 
            <div className="Row1">
                <ResourceMiniBox />
                <ResourceMiniBox />
                <ResourceMiniBox />
            </div> 
        </div>
    );
}

export default ResourceSection;