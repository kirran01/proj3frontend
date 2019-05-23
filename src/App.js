import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link, Route } from "react-router-dom";
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link id="home-link" to="/">
                D R O P
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/favorites">Favorited</Link>
              <Link to="/news">News</Link>
<<<<<<< HEAD
              <Link id="navlink" to="/login">Login</Link>
              <Link id="navlink" to="/signup">Signup</Link>
=======
              <Link className="login-btn" to="/login">
                Login
              </Link>
              <Link to="/signup">Signup</Link>
>>>>>>> e4ad115459b00abba52ccf8214418a2c18338899
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
