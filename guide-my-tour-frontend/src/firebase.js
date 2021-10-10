import firebase from 'firebase';

const firebaseConfig = {
    // Your Credentials
    apiKey: "AIzaSyARlYRJUQPNuZA3yBTj1fQ_RW012M3ugy8",
    authDomain: "map-tracking-71a6b.firebaseapp.com",
    projectId: "map-tracking-71a6b",
    storageBucket: "map-tracking-71a6b.appspot.com",
    messagingSenderId: "754802438237",
    appId: "1:754802438237:web:125a764ad3417a4ada1db4"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;