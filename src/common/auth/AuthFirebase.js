/* eslint-disable*/
import firebase from '../../firebase_config';

import Auth from './Auth';

class AuthFirebase extends Auth {
  authenticateWithUsernameAndPassword(credentials){
    console.log("authenticateWithUsernameAndPassword", credentials);
    return firebase.auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        return {
          displayName: response.user.displayName,
          email: response.user.email,
          uid: response.user.uid,
        }
      })
      .catch(function(error) {
        console.log("error", error);
        return false;
      });
  }
  authenticateWithFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().languageCode = 'pt_BR';
    // provider.setCustomParameters({
    //   'display': 'popup'
    // });
    return firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      console.log("facebook response", result);
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      return {
        displayName: user.displayName,
        email: user.email,
      }
      // ...
    }).catch(function(error) {
      console.error('error authenticateWithFacebook', error)
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  signOut(){
    return firebase.auth().signOut()
      .then(function() {
        console.log("signOut OK");
        return true;
      })
      .catch(function(error) {
        console.log("signOut error", error);
        return false;
      });
  }
}
export default AuthFirebase;
