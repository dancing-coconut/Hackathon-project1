import React from 'react';

function InfoSection(props) {
    return (
        <div className="Info__container">
            <img className="InfoImage" src={props.infoimg} alt="Pictures"/>
            <h3 className="InfoTitle">{props.infotitle}</h3>
            <p className="InfoInfo">{props.info}</p>
            <button className="InfoButton">Read More</button>
        </div>
    )
}
export default InfoSection;

