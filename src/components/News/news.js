// @flow
import React, { Component } from "react";
import {
 Card,
 CardTitle,
 CardText,
 CardActions,
 CardMenu,
 IconButton,
 Button
} from "react-mdl";

const url = "https://dropsproject.herokuapp.com/api/news/"

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
   
  }
  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(news => {
        this.setState({
            news
        });
      });
     
  }

  render() {
    console.log(this.state.news)
    let news = this.state.news.map((news) => {

      return(
        <Card shadow={0} style={{width: '580px', margin: '20px auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: `url(${news.image}) center / cover`}}>{news.title}</CardTitle>
        <CardText>
           {news.paragraph}
        </CardText>
        <CardActions border>
            <Button colored>Read More</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>

      )
    })
    return <div>{news}</div>
  }
}
export default News

{/* <div className = 'container'>
<h1>{news.title}</h1>
<p>{news.paragraph}</p>

</div> */}