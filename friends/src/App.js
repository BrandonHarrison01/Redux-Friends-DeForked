import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <h1>Friends App</h1>
      <Route exact path='/' component={LoginForm}/>
      <Route path='/friends' component={FriendsList}/>
      {/* <FriendsList /> */}
    </div>
  );
}

export default App;
