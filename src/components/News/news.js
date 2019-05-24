// @flow
import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
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
      <div className = 'container'>
      <h1>{news.title}</h1>
      <p>{news.paragraph}</p>
      
      </div>

      )
    })
    return <div>{news}</div>
  }
}
export default News
