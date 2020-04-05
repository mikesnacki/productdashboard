import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import './App.scss';


import Header from "./components/header"
import Home from "./components/home"
import StoriesPage from "./components/storiesPage"
import UserProjects from "./components/userProjects"
import Profile from "./components/profile"
import Loading from "./components/loading"
import PrivateRoute from "./components/privateRoute"

import history from "./utilhooks/history"
import { useAuth0 } from "./utilhooks/useAuth"

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <Loading/>
  }

  return (
    <div>
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path ="/" exact component={Home}/>
          <PrivateRoute path ="/projects" component={StoriesPage}/>
          <PrivateRoute path ="/addproject" component={UserProjects}/>
          <PrivateRoute path ="/profile" component={Profile}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
