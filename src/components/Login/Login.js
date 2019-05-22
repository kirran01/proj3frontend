import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>My login</h1>
                    <div className="form-container">
                        <form>
                            <label>Email</label>
                            <input type="text" placeholder="email" />
                            <label>Password</label>
                            <input type="password" name="" />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;