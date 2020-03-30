import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import Header from './components/header'
import StoriesPage from './components/storiesPage'
import Login from "./components/login"
import UserProjects from "./components/userProjects"

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route path ="/" exact component={StoriesPage}/>
        <Route path ="/addproject" exact component={UserProjects}/>
        <Route path ="/login" exact component={Login}/>
      </Router>
    </div>
  );
}

export default App;
