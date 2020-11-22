import React from 'react';
import store from './app/store';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import './App.css';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
