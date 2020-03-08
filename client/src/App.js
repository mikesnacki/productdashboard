import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import Header from './components/header'
import Stories from './components/stories'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Stories/>
      </Router>
    </div>
  );
}

export default App;
