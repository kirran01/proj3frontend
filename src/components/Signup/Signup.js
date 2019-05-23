import React, { Component } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom'


class Signup extends Component {
    render() {
        return (
            <div className="signup-container">
                {/* Signup Form */}
                <form className="form-container2">
                    <h2 className="signup-title">Signup for an account!</h2>
                    <label className="signup-label">Username</label>
                    <input name="Name" className="signup-input" type="text" />
                    <label className="signup-label">Email</label>
                    <input className="signup-input" name="email" type="text" />
                    <label className="signup-label">Password</label>
                    <input name="password" className="signup-input" type="password" />
                    <button title={<Link to="/"></Link>} id="signup-button">Create account</button>
                </form>
            </div>
        );
    }
}

export default Signup;