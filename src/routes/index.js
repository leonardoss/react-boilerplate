import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from '../containers/Dashboard';
import NotFound from '../containers/NotFound';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import About from '../containers/About';
import Auth from '../containers/Auth';

class Routes extends React.Component {
   render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={ Dashboard } />
        <PrivateRoute exact path="/about" component={ About } />
        <PublicRoute exact path="/auth" component={ Auth } />
        <Route component={ NotFound } />
      </Switch>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object,
};

export default Routes;
