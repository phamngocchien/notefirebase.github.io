import firebase from 'firebase/app'
var firebaseConfig = {
    apiKey: "AIzaSyAdVkFtu0SWqU240VuiP07RGoZGu-0P6pQ",
    authDomain: "notereact-265c4.firebaseapp.com",
    databaseURL: "https://notereact-265c4-default-rtdb.firebaseio.com",
    projectId: "notereact-265c4",
    storageBucket: "notereact-265c4.appspot.com",
    messagingSenderId: "820544963164",
    appId: "1:820544963164:web:699ee434f4c42838991c99",
    measurementId: "G-FN5HQ7NZ1R"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
require('firebase/database');
export const noteData = firebase.database().ref('dataForNode');
