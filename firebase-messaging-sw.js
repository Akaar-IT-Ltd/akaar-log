importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCvCmndRmQUHEGBLkkQvX0Vus0d76qnjOc",
    authDomain: "akaar-employee-reporting.firebaseapp.com",
    projectId: "akaar-employee-reporting",
    storageBucket: "akaar-employee-reporting.firebasestorage.app",
    messagingSenderId: "558452860170",
    appId: "1:558452860170:web:7a1504126612ca698586f3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icons/Icon-192.png'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
