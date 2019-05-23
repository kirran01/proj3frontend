import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link, Route } from "react-router-dom";
import Login from './components/Login/Login'
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

  componentDidMount(){
    if(localStorage.token) {
      this.setState({loggedIn: true})
    } else {
      this.setState({loggedIn: false})
    }
  }

  //handle input
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  //handle signup
  handleSignup = (e) => {
    e.preventDefault()
    axios.post('https://dropsproject.herokuapp.com/api/users/signup', {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => {
      localStorage.token = res.data.token
      this.setState({loggedIn: true})
    })
    .catch(err => console.log(err))
  }
  
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
              <Link className="login-btn" to="/login">
                Login
              </Link>
              <Link to="/signup">Signup</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
            <Route path="/login" component={Login} />
            <Route path="/signup" 
            render={(props) => {
              return(
                <Signup loggedIn={this.state.loggedIn} handleInput={this.handleInput} handleSignup={this.handleSignup}/>
              )
            }} />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
