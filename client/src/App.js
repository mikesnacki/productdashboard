import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import Header from './components/header'
import StoriesPage from './components/storiesPage'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <StoriesPage/>
      </Router>
    </div>
  );
}

export default App;
