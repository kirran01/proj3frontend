import React, { Component } from 'react'
import './App.css'
import { Layout, Header, Navigation, Content } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link id="home-link" to="/">D R O P</Link>} scroll>

            <Navigation>
              <Link to="/favorites">Favorited</Link>
              <Link to="/news">News</Link>
              <Link className='login-btn' to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App