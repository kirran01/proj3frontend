import React from 'react';
import LandingPage from './Landingpage/Landingpage';
import News from './News/news';
import Favorites from './Favorites/Favorites'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/news" component={News} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup} />
    </Switch>
)

export default Main;