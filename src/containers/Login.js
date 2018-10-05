import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
// aws cognito
import Auth from '@aws-amplify/auth';
import awsconfig from '../aws-exports';


import * as userActions from '../actions/userActions';
import SignIn from '../components/auth/SignIn';

// retrieve temporary AWS credentials and sign requests
Auth.configure(awsconfig);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }

  handleUserLogin(data) {
    console.log('handleUserLogin', data);

    Auth.signIn(data.email, data.password)
      .then(user => {
        console.log('return cognito user', user);
        this.props.loginUser(user);
        console.log('this.props', this.props);
        this.props.history.push('/');
      })
      .catch(err => {
        console.log('return cognito err', err);
        alert('return cognito err', err);
      });
  }

  render() {
    const { state } = this;
    return (
      <SignIn handleUserLogin={ this.handleUserLogin } errorMessage={ state.errorMessage } />
    );
  }
}

Login.propTypes = {
  authenticated: PropTypes.bool,
  loginUser: PropTypes.func,
};

export default compose(connect(state => ({
  authenticated: state.UserReducer.authenticated,
  user: state.UserReducer.user
}), {
  ...userActions
}))(Login);
