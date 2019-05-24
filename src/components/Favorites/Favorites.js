import React, { Component } from 'react'
import axios from 'axios'
import { Card, CardTitle, CardText, CardActions, CardMenu, Button } from 'react-mdl'

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
            <div className='items-grid'>
                {this.state.favorites.map(favorites => (
                    <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: `url(${favorites.image}) center/cover` }}> </CardTitle>
                        <CardText>
                            <p>{favorites.brand}</p>
                            {favorites.description}
                        </CardText>
                        <CardActions border>
                            <Button colored><a href={favorites.links.expensive}>Pricey</a></Button>
                            <Button colored><a href={favorites.links.cheap}>Bid</a></Button>

                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                        </CardMenu>
                    </Card>
                ))}

            </div>
        )
    }
}

export default Favorites;
