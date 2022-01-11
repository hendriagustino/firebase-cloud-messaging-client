import firebase from 'firebase/app';
import 'firebase/messaging';

// change the value(s) for the Config variable below according to Firebase Project
const config = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

export default messaging;
