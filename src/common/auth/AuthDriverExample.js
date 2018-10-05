import Auth from './Auth';

class AuthDriverExample extends Auth {
  authenticateWithUsernameAndPassword(credentials) {
    console.log('[AuthDriverExample]', 'authenticateWithUsernameAndPassword', credentials);
    console.log('[AuthDriverExample]', this);
    if (credentials.username === 'luke' && credentials.password === 'yes') {
      return this.onAuthStateChange({
        firstName: 'Luke',
        lastName: 'Skywalker',
        profile: 'Jedi',
      });
    }
    return this.onAuthStateChange({});
  }

  onAuthStateChange(data) {
    console.log('[AuthDriverExample]', 'onAuthStateChange', data, this.props);
    this.props.authStatusChange(data);
  }
}
export default AuthDriverExample;
