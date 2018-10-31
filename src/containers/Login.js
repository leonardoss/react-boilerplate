import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';

import * as authActions from '../actions/authActions';

import SignIn from '../components/auth/SignIn';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }

  componentDidUpdate(prevProps, prevState){
    console.log("LOGIN update")
  }

  componentWillReceiveProps(newProps, nextContext) {
    console.log('componentWillReceiveProps - newProps', newProps)
    if (newProps.authenticated === true) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const { state } = this;
    console.log('render login', state)
    const { authWithUsernameAndPassword, authWithFacebook, authWithGoogle } = this.props;
    return (
      <SignIn handleUserLogin={ authWithUsernameAndPassword } authFacebook={ authWithFacebook } authGoogle={ authWithGoogle } errorMessage={ state.errorMessage } />
    );
  }
}

Login.propTypes = {
  authWithUsernameAndPassword: PropTypes.func.isRequired,
  authWithFacebook: PropTypes.func.isRequired,
  authWithGoogle: PropTypes.func.isRequired,
};

export default compose(connect(state => ({
  authenticated: state.AuthReducer.authenticated,
  isAuthenticatingBool: state.AuthReducer.isAuthenticatingBool,
}), {
  ...authActions,
}))(Login);
