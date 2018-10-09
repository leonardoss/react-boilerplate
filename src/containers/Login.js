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

  render() {
    const { state } = this;
    const { authWithUsernameAndPassword } = this.props;
    return (
      <SignIn handleUserLogin={ authWithUsernameAndPassword } errorMessage={ state.errorMessage } />
    );
  }
}

Login.propTypes = {
  authWithUsernameAndPassword: PropTypes.func.isRequired,
};

export default compose(connect(state => ({
  authenticated: state.AuthReducer.authenticated,
}), {
  ...authActions,
}))(Login);
