importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js');

// change the value(s) for the Config variable below according to Firebase Project
const firebaseConfig = {
  apiKey: 'AIzaSyBAcKwqsVfkydJ49_3trSocpnR13Vt3CeU',
  authDomain: 'membership-428a3.firebaseapp.com',
  projectId: 'membership-428a3',
  storageBucket: 'membership-428a3.appspot.com',
  messagingSenderId: '298738312519',
  appId: '1:298738312519:web:9967b29b859aac58e0d862',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.data.body,
    data: {
      id: payload.data.id,
      isRead: false,
    },
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
});