import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';

import Header from "./components/header"
import Home from "./components/home"
import StoriesPage from "./components/storiesPage"
import Login from "./components/login"
import UserProjects from "./components/userProjects"
import Profile from "./components/profile"

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
          <Route path ="/projects" user={user} exact component={StoriesPage}/>
          <Route path ="/addproject" exact component={UserProjects}/>
          <Route path ="/login" exact component={Login}/>
          <Route path ="/profile" exact component={Profile}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
