class Auth {
  constructor(props) {
    this.props = props;
  }

  authenticateWithUsernameAndPassword(credentials) {
    console.log('[AuthDriver]', 'authenticateWithUsernameAndPassword', credentials);
  }

  onAuthStateChange(data) {
    console.log('[AuthDriver]', 'onAuthStateChange', data);
    this.props.authStatusChange(data);
  }
}
export default Auth;
