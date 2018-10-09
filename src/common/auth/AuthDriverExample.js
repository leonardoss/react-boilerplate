import Auth from './Auth';

class AuthDriverExample extends Auth {
  authenticateWithUsernameAndPassword(credentials) {
    console.log('[AuthDriverExample]', 'authenticateWithUsernameAndPassword', credentials);
    return new Promise((resolve, reject) => {
      if (credentials.email === 'luke' && credentials.password === 'yes') {
        resolve({
          firstName: 'Luke',
          lastName: 'Skywalker',
          profile: 'Jedi',
        });
      }else{
        reject({ error: 101 });
      }
    })
    .then(response => response)
    .catch(error => error);
  }
}
export default AuthDriverExample;
