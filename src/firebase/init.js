import firebase from 'firebase'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyC8q4tM_P61K2dnWaE5k-1sCgLrE5p4G7A",
    authDomain: "vuepractice-f4374.firebaseapp.com",
    databaseURL: "https://vuepractice-f4374.firebaseio.com",
    projectId: "vuepractice-f4374",
    storageBucket: "vuepractice-f4374.appspot.com",
    messagingSenderId: "530283523804",
    appId: "1:530283523804:web:bbc4d4940939035ac48e19",
    measurementId: "G-HS1DSLT8CF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  db.settings({ timestampsInSnapshots: true})
  export default db