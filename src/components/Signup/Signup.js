import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                {/* Signup Form */}
                <form>
                    <h2>Signup</h2>
                    <label>Name</label>
                    <input type="text"/>
                    <label>Email</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="password"/>
                </form>
            </div>
        );
    }
}

export default Signup;