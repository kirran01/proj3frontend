import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div className="signup-container">
                {/* Signup Form */}
                <form className="form-container2">
                    <h2 className="signup-title">Signup</h2>
                    <label className="signup-label">Name</label>
                    <input name="Name" className="signup-input" type="text" />
                    <label className="signup-label">Email</label>
                    <input className="signup-input" name="email" type="text" />
                    <label className="signup-label">Password</label>
                    <input className="signup-input" type="password" />
                </form>
            </div>
        );
    }
}

export default Signup;