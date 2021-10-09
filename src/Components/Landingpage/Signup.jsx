import React from "react";

function Signup(props) {
    return (
        <div className="form-content">
            <form className="form">
                <h1 className="form-title">Sign Up</h1>
                <h3 className="form-tagline">Start your cryptocurrency journey with us today!</h3>
                <div className="form-input">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input type="text" id="name" className="form-input" placeholder="Enter your name" />
                </div>
                <div className="form-input">
                    <label htmlFor="email" className="form-label">
                        E-mail
                    </label>
                    <input type="email" id="email" className="form-input" placeholder="Enter your e-mail" />
                </div>
                <div className="form-input">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input type="password" id="password" className="form-input" placeholder="Enter your password" />
                </div>
                <div className="form-input">
                    <label htmlFor="conf-password" className="form-label">
                        Confirm Password
                    </label>
                    <input type="password" id="conf-password" className="form-input" placeholder="Re-enter your password" />
                </div>
                <button className="register-button" type="submit">
                    Sign Up
                </button>
                <span className="form-login">
                    Already have an account? Login <a href="#">here</a>
                </span>
            </form>
        </div>
    );
}

export default Signup;
