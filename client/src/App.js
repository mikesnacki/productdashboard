import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import PrivateRoute from "./components/PrivateRoute"

import Header from "./components/Header"
import Home from "./components/Home"
import StoriesPage from "./components/StoriesPage"
import Login from "./components/Login"
import UserProjects from "./components/UserProjects"
import Profile from "./components/Profile"

import history from "./utilhooks/history"
import { useAuth0  } from "./utilhooks/useAuth"

function App() {

  const {loading, user} = useAuth0();
  user !== undefined && console.log(user)

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path ="/" exact component={Home}/>
          <PrivateRoute path ="/projects" user={user} component={StoriesPage}/>
          <PrivateRoute path ="/addproject" component={UserProjects}/>
          <Route path ="/login" exact component={Login}/>
          <PrivateRoute path ="/profile" component={Profile}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
