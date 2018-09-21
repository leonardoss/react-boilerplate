import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from '../containers/NotFound';
import Dashboard from '../containers/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Dashboard } />
    <Route exact path="/user" component={ Dashboard } />
    <Route component={ NotFound } />
  </Switch>
);

export default Routes;
