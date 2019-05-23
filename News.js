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

class News extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }
  componentDidMount() {
    fetch("https://dropsproject.herokuapp.com/api/news")
      .then(res => res.json())
      .then(news => {
        this.setState(news);
      });
  }

  render() {
    return (
      <div className="news-grid">
        {this.state.news.map(news => (
          <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
              }}
            >
              {news.title}
            </CardTitle>
            <CardText>{news.paragraph}</CardText>
            <CardActions border>
              <Button colored>Read more</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        ))}
      </div>
    );
  }
}
