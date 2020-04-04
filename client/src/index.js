import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./utilhooks/useAuth";
import config from "./auth_config.json";
import history from "./utilhooks/history.js";
import 'typeface-inter';

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();