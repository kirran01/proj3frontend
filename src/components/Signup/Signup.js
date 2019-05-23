import React, { Component } from 'react';
import './Signup.css'
// import { Link } from 'react-router-dom'


class Signup extends Component {
    render() {
        return (
            <div className="signup-container">
                {/* Signup Form */}
                <form className="form-container2">
                    <h2 className="signup-title">Signup for an account!</h2>
                    <label className="signup-label">Email</label>
                    <input className="signup-input" name="email" type="text" onChange={this.props.handleInput}/>
                    <label className="signup-label">Password</label>
                    <input name="password" className="signup-input" type="password" onChange={this.props.handleInput}/>
                    <input value='Create Account' type='submit' id="signup-button" onClick={this.props.handleSignup}/>
                </form>
            </div>
        );
    }
}

export default Signup;