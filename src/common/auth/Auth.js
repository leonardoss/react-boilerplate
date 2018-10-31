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
  signOut(){
    console.log('[AuthDriver]', 'signOut', data);
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  static getUser(){
    console.log('[AuthDriver]', 'getUser', data);
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  static updateUser(){
    console.log('[AuthDriver]', 'updateUser', data);
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
export default Auth;
