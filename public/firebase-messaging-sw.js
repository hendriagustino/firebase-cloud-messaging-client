importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js');

// change the value(s) for the Config variable below according to Firebase Project
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
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
