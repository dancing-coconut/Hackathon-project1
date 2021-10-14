import React from "react";

function Signup(props) {
    return (
        <div className="form-content">
            <form className="form">
                <h1 className="form-title">Sign Up</h1>
                <h3 className="form-tagline">Start your cryptocurrency journey with us today!</h3>
                <div className="form-input">
                    <input type="text" id="name" className="form-input" placeholder="Enter your name" />
                </div>
                <div className="form-input">
                    <input type="email" id="email" className="form-input" placeholder="Enter your e-mail" />
                </div>
                <div className="form-input">
                    <input type="password" id="password" className="form-input" placeholder="Enter your password" />
                </div>
                <div className="form-input">
                    <input type="password" id="conf-password" className="form-input" placeholder="Re-enter your password" />
                </div>
                <button className="register-button">
                    Sign Up
                </button>
                <div className="form-login">
                    Already have an account? Login <a href="/">here</a>
                </div>
            </form>
        </div>
    );
}

export default Signup;