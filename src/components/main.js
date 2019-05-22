import React from 'react';
import LandingPage from './Landingpage';
import News from './news';
import Favorites from './Favorites'
import Login from './Login'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/news" component={News} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/login" component={Login}/>
    </Switch>
)

export default Main;