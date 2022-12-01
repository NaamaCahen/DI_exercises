import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Shop from './Shop';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './ErrorBoundary';
import NavBootstarp from './NavBootstrap';
import PostList from './PostList';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
  }
  fetchData = () => {
    
    fetch(`https://webhook.site/c19eaa65-6b31-4d68-bdb1-855ef3f1dd4e`, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      })
    })
      .then(data => console.log(data))
      .catch(e => console.log('error!!!', e));

  }
  render() {
    return (
      <>
        <NavBootstarp />

        <nav className='nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/profile'>profile</NavLink>
          <NavLink to='/shop'>shop</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<ErrorBoundary><Home /></ErrorBoundary>} />
          <Route path='/profile' element={<ErrorBoundary><Profile /></ErrorBoundary>} />
          <Route path='/shop' element={<ErrorBoundary><Shop /></ErrorBoundary>} />
        </Routes>
        <PostList />
        <ErrorBoundary><Example1 /></ErrorBoundary>
        <ErrorBoundary><Example2 /></ErrorBoundary>
        <ErrorBoundary><Example3 /></ErrorBoundary>
        <button onClick={this.fetchData}>click me to post some data</button>
      </>
    )
  }
}

export default App;
