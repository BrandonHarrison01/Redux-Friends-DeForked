import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <h1>Friends App</h1>
      <Route path='/' component={LoginForm}/>
      {/* <FriendsList /> */}
    </div>
  );
}

export default App;
