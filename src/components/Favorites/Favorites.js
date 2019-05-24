import React, { Component } from 'react'
import axios from 'axios'

class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favorites: []
        }
    }
    componentDidMount() {

        const token = localStorage.getItem("token")
        axios.get(`http://localhost:4060/users/id/${token}`)
            .then(res => this.setState({
                favorites: res.data.favorites
            }))
    }
    render() {
        console.log(this.state.favorites)
        return (

            <div><h1>Favorites Page</h1></div>
        )
    }
}

export default Favorites;
