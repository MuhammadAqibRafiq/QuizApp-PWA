importScripts('https://www.gstatic.com/firebasejs/9.0.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAGDvW9ihOLVkG2LC3cFZ9B9oKYSyxpbUc",
    authDomain: "notificationapp-d0a93.firebaseapp.com",
    projectId: "notificationapp-d0a93",
    storageBucket: "notificationapp-d0a93.appspot.com",
    messagingSenderId: "534497182778",
    appId: "1:534497182778:web:8462d6fc8d06ebd6e2e103"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();