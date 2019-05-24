import React from "react";
import LandingPage from "./Landingpage/Landingpage";
import News from "./News/news.js";
import Favorites from "./Favorites/Favorites";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/news" component={News} />
    <Route path="/favorites" component={Favorites} />
  </Switch>
);

export default Main;
