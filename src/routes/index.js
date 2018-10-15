import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from '../containers/Dashboard';
import NotFound from '../containers/NotFound';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import About from '../containers/About';
import Login from '../containers/Login';

import firebase from '../firebase_config';

class Routes extends React.Component {
  componentDidMount() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     // User is signed in.
    //     const userInfo = {
    //       displayName: user.displayName,
    //       email: user.email,
    //       emailVerified: user.emailVerified,
    //       photoURL: user.photoURL,
    //       isAnonymous: user.isAnonymous,
    //       uid: user.uid,
    //       providerData: user.providerData,
    //     };
    //   } else {
    //     // this.setState({user: {}});
    //   }
    // });
  }

  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={ Dashboard } />
        <PrivateRoute exact path="/about" component={ About } />
        <PublicRoute exact path="/auth" component={ Login } />
        <Route component={ NotFound } />
      </Switch>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object,
};

export default Routes;
