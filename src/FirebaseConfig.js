import firebase from 'firebase/app';
import 'firebase/messaging';

// change the value(s) for the Config variable below according to Firebase Project
const config = {
  apiKey: 'AIzaSyBAcKwqsVfkydJ49_3trSocpnR13Vt3CeU',
  authDomain: 'membership-428a3.firebaseapp.com',
  projectId: 'membership-428a3',
  storageBucket: 'membership-428a3.appspot.com',
  messagingSenderId: '298738312519',
  appId: '1:298738312519:web:9967b29b859aac58e0d862',
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

export default messaging;
