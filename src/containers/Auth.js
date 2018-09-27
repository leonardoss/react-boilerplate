import React from 'react';

import SignIn from '../components/auth/SignIn';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }

  handleUserLogin(data) {
    console.log('handleUserLogin', data);
  }

  render() {
    const { state } = this;
    return (
      <SignIn handleUserLogin={ this.handleUserLogin } errorMessage={ state.errorMessage } />
    );
  }
}
export default Auth;
