import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link, Route } from "react-router-dom";
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Signup from './components/Signup/Signup'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: false
    }
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({ loggedIn: true })
    } else {
      this.setState({ loggedIn: false })
    }
  }

  //handle input
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  //handle signup
  handleSignup = (e) => {
    e.preventDefault()
    axios.post('https://dropsproject.herokuapp.com/users/signup', {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        localStorage.token = res.data.token
        this.setState({ loggedIn: true })
      })
      // .then(res => res.redirect('/'))
      .catch(err => console.log(err))
  }

  // LOGOUT
  handleLogout = () => {
    this.setState({
      email: '',
      password: '',
      loggedIn: false
    })
    console.log(this.state)
    localStorage.clear()
  }

  // LOGIN
  handleLogin = (e) => {
    e.preventDefault()
    axios.post('https://dropsproject.herokuapp.com/users/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        localStorage.token = res.data.token
        this.setState({ loggedIn: true })
        // console.log(this.state)
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link id="home-link" to="/">
                D R O P S
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/favorites">Favorites</Link>
              <Link to="/news">News</Link>
              <Link className="login-btn" to="/login">
                Login
              </Link>
              <Link className="login-btn" to="/logout">
                Logout
              </Link>
              <Link to="/signup">Signup</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
            <Route path="/login"
              render={(props) => {
                return (
                  <Login handleLogin={this.handleLogin} handleInput={this.handleInput} />
                )
              }}
            />
            <Route path="/logout"
              render={(props) => {
                return (
                  <Logout handleLogout={this.handleLogout} />
                )
              }}
            />
            <Route path="/signup"
              render={(props) => {
                return (
                  <Signup loggedIn={this.state.loggedIn} handleInput={this.handleInput} handleSignup={this.handleSignup} />
                )
              }} />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
