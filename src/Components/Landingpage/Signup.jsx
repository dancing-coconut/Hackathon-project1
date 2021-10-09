import React from "react";

function SignUp(props){
    return(
        <div className="SignupBox" onClick={props.handleClose1}>
            <div className="SignupContent">
                <span  ></span>
                {props.signup}
            </div>
        </div>
    );
}
export default SignUp;