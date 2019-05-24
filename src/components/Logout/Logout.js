import React, { Component } from 'react';

class Logout extends Component {
    render() {
        return (
            <div className='login-container'>
                <form className='form-container'>
                <h2 className='login-title'>Logout</h2> 
                    <input type="submit" value="Logout" onClick={this.props.handleLogout} id='login-button'/>
                </form>
            </div>
        );
    }
}

export default Logout;