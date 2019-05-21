import React from 'react';
import LandingPage from './landingpage';
import News from './news';
import Favorites from './favorites'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/news" component={News} />
        <Route path="/favorites" component={Favorites} />
    </Switch>
)

export default Main;