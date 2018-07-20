import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch, IndexRoute } from 'react-router-dom';
import { PrivateRoute } from './_components';
import { LoginPage } from './LoginPage';
import { MESPage } from './MESPage';
import { NoMatchPage } from './NoMatchPage';

import { history } from './_helpers';

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <PrivateRoute Route path="/MES" component={MESPage} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
