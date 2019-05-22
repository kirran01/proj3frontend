import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div style={{ height: '300px', position: 'relative' }}>
        <Layout className='layout' style={{ background: 'url(https://images.pexels.com/photos/1036396/pexels-photo-1036396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover' }}>
          <Header transparent title="D R O P" style={{ color: 'white' }}>
            <Navigation>
              <Link to="/favorites">Favorites</Link>
              <Link to="/news">News</Link>
              <Link className='login-btn' to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </Navigation>
          </Header>
          <Drawer title="What can we find for you?">
            <Navigation>
              <a href="/">whats</a>
              <a href="/">going</a>
              <a href="/">to</a>
              <a href="/">go here?</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content"></div>
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
