import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import Header from './components/header'
import UserStories from './components/userStories'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <UserStories/>
      </Router>
    </div>
  );
}

export default App;
