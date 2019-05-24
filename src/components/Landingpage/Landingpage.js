import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0, clothing: [] }
    }
    componentDidMount() {
        // will change
        //just updated using deployed link
        fetch("https://dropsproject.herokuapp.com/api/clothing/")
            .then(res => res.json())
            .then(clothing => {
                this.setState({
                    clothing
                })


            })
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className='items-grid'>
                    {this.state.clothing.map(clothing => (
                        <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
                            <CardTitle style={{ color: "#fff", height: "200px", background: `url(${clothing.image}) center/cover` }}> </CardTitle>
                            <CardText>
                                <h5>{clothing.brand}</h5> 
                                {clothing.description}
                            </CardText>
                            <CardActions border>
                                <Button colored><a href={clothing.links.expensive}>Pricey</a></Button>
                                <Button colored><a href={clothing.links.cheap}>Bid</a></Button>
                            </CardActions>
                            <CardMenu style={{ color: "#fff" }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    ))}

                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className='items-grid'>
                    {/* item 1 */}
                    <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center/cover" }}> Hoodie</CardTitle>
                        <CardText>
                            this is a sick hoodie.
                    </CardText>
                        <CardActions border>
                            <Button colored>Pricey</Button>
                            <Button colored>Bid</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* item 2 */}
                    <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center/cover" }}> Hoodie 2</CardTitle>
                        <CardText>
                            this is a sick hoodie.
                    </CardText>
                        <CardActions border>
                            <Button colored>Pricey</Button>
                            <Button colored>Bid</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* item 3 */}
                    <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center/cover" }}> Hoodie 3</CardTitle>
                        <CardText>
                            this is a sick hoodie.
                    </CardText>
                        <CardActions border>
                            <Button colored>Pricey</Button>
                            <Button colored>Bid</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="items-grid">
                    {/* item 1 */}
                    <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center/cover" }}> Hoodie</CardTitle>
                        <CardText>
                            this is a sick hoodie.
                    </CardText>
                        <CardActions border>
                            <Button colored>Pricey</Button>
                            <Button colored>Bid</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* item 2 */}
                    <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center/cover" }}> Hoodie 2</CardTitle>
                        <CardText>
                            this is a sick hoodie.
                    </CardText>
                        <CardActions border>
                            <Button colored>Pricey</Button>
                            <Button colored>Bid</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* item 3 */}
                    <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center/cover" }}> Hoodie 3</CardTitle>
                        <CardText>
                            this is a sick hoodie.
                    </CardText>
                        <CardActions border>
                            <Button colored>Pricey</Button>
                            <Button colored>Bid</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="items-grid">
                    {/* item 1 */}
                    <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center/cover" }}> Hoodie</CardTitle>
                        <CardText>
                            this is a sick hoodie.
                    </CardText>
                        <CardActions border>
                            <Button colored>Pricey</Button>
                            <Button colored>Bid</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* item 2 */}
                    <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center/cover" }}> Hoodie 2</CardTitle>
                        <CardText>
                            this is a sick hoodie.
                    </CardText>
                        <CardActions border>
                            <Button colored>Pricey</Button>
                            <Button colored>Bid</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* item 3 */}
                    <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{ color: "#fff", height: "176px", background: "url(https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center/cover" }}> Hoodie 3</CardTitle>
                        <CardText>
                            this is a sick hoodie.
                    </CardText>
                        <CardActions border>
                            <Button colored>Pricey</Button>
                            <Button colored>Bid</Button>
                        </CardActions>
                        <CardMenu style={{ color: "#fff" }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }


    render() {
        console.log(this.state.clothing)
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>All</Tab>
                    <Tab>Tops</Tab>
                    <Tab>Footware</Tab>
                    <Tab>Legs</Tab>
                    <Tab>Accessories</Tab>
                   
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }

}

export default Landing;
