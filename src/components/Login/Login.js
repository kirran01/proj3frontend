import React, { Component } from 'react';
import './Login.css'
import { Link } from 'react-router-dom'


class Login extends Component {
    render() {
        return (

            <div className="login-container">

                <form className="form-container">
                    <h1 className="login-title">Login to your account</h1>
                    <label className="login-label">Email</label>
                    <input name="email" className="login-input" type="text" />
                    <label className="login-label">Password</label>
                    <input className="login-input" type="password" name="password" />
                    <button id="login-button">Login</button>
                    <Link className="login-link" to="/signup">Don't have an account? Sign up!</Link>
                </form>
            </div>

        );
    }
}

export default Login;