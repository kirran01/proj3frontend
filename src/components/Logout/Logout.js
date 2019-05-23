import React, { Component } from 'react';

class Logout extends Component {
    render() {
        return (
            <div>
                <h2>Logout</h2> 
                <form>
                    <input type="submit" value="Logout" onClick={this.props.handleLogout}/>
                </form>
            </div>
        );
    }
}

export default Logout;