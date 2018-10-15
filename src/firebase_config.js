import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD9JakgS8EXyZtzhhipcWg74oB3rA_0VPQ',
  authDomain: 'nwrs-215613.firebaseapp.com',
  databaseURL: 'https://nwrs-215613.firebaseio.com',
  projectId: 'nwrs-215613',
  storageBucket: 'nwrs-215613.appspot.com',
  messagingSenderId: '199810132616',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
