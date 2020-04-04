import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import './App.scss';
import PrivateRoute from "./components/PrivateRoute"

import Header from "./components/Header"
import Home from "./components/Home"
import StoriesPage from "./components/StoriesPage"
import UserProjects from "./components/UserProjects"
import Profile from "./components/Profile"
import Loading from "./components/Loading"

import history from "./utilhooks/history"
import { useAuth0  } from "./utilhooks/useAuth"

function App() {

  const {loading} = useAuth0();

  if (loading) {
    return <Loading/>
  }

  return (
    <div>
      <Router history={history}>
        {/* <Header/> */}
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
