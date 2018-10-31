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
import {compose} from "redux";
import {connect} from "react-redux";

import LinearProgress from '@material-ui/core/LinearProgress';

import * as authActions from "../actions/authActions";
import AuthDriver from "../common/auth/AuthFirebase";

class Routes extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        const userInfo = {
          displayName: user.displayName,
          email: user.email,
          // emailVerified: user.emailVerified,
          // photoURL: user.photoURL,
          // isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData,
        };
        this.props.authStatusChange(userInfo);
      } else {
        this.props.authStatusChange({});
      }
      this.props.isAuthenticating(false);
    });
  }

  render() {
    if(this.props.isAuthenticatingBool){
      return (<LinearProgress />);
    }
    return (
      <Switch>
        <PrivateRoute exact path="/" component={ Dashboard } authenticated={this.props.authenticated} />
        <PrivateRoute exact path="/about" component={ About } authenticated={this.props.authenticated} />
        <PublicRoute exact path="/auth" component={ Login } authenticated={this.props.authenticated} />
        <Route component={ NotFound } />
      </Switch>
    );
  }
}

Routes.defaultProps = {
  authStatusChange: () => {},
  isAuthenticatingBool: true,
};

Routes.propTypes = {
  history: PropTypes.object,
  authStatusChange: PropTypes.func,
  isAuthenticating: PropTypes.func,
  isAuthenticatingBool: PropTypes.bool,
  authenticated: PropTypes.bool,
};

export default compose(connect(state => ({
  authenticated: state.AuthReducer.authenticated,
  isAuthenticatingBool: state.AuthReducer.isAuthenticating,
}), {
  ...authActions,
}))(Routes);
