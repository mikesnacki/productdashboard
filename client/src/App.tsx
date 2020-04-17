import React, {Suspense} from 'react';
import { Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Loading from "./components/Loading"
import PrivateRoute from "./components/PrivateRoute"
import history from "./utilhooks/history"
import { Auth0Provider } from "./utilhooks/useAuth";
import config from "./auth_config.json";

const Header = React.lazy(()=>import("./components/Header"));
const Home = React.lazy(()=>import("./components/Home"));
const Sketch = React.lazy(()=>import("./components/Sketch"));
const StoriesPage = React.lazy(()=>import( "./components/StoriesPage"));
const UserProjects = React.lazy(()=>import("./components/UserProjects"));
const Profile = React.lazy(()=>import("./components/Profile"));

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

function App() {
  return (
    <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    audience={config.audience} 
    onRedirectCallback={()=>onRedirectCallback}
  >
      <Suspense fallback={<Loading/>}>
        <Router history={history}>
          <Header/>
          <Switch>
            <Route path ="/" exact component={Home}/>
            <Route path ="/sketch" exact component={Sketch}/>
            <PrivateRoute path ="/projects" component={StoriesPage}/>
            <PrivateRoute path ="/addproject" component={UserProjects}/>
            <PrivateRoute path ="/profile" component={Profile}/>
          </Switch>
        </Router>
      </Suspense>
    </Auth0Provider>
  );
}

export default App;
