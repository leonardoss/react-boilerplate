class Auth {
  authenticateWithUsernameAndPassword(credentials) {
    console.log('[AuthDriver]', 'authenticateWithUsernameAndPassword', credentials);
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  onAuthStateChange(data) {
    console.log('[AuthDriver]', 'onAuthStateChange', data);
  }
}
export default Auth;
