import firebase from "firebase/app";
import "firebase/firestore";

if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
var firebaseConfig = {
  "projectId": "values-card-test",
  "appId": "1:379819919241:web:0a925d23af1e70b9a28358",
  "databaseURL": "https://values-card-test.firebaseio.com",
  "storageBucket": "values-card-test.appspot.com",
  "locationId": "asia-northeast1",
  "apiKey": "AIzaSyBr1GtmL6o94YUlDEvepioeb-QjuWGqrHM",
  "authDomain": "values-card-test.firebaseapp.com",
  "messagingSenderId": "379819919241",
  "measurementId": "G-4KDMM2TVT0"
};
// if (firebaseConfig) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
// }

export const db = firebaseApp.firestore();
