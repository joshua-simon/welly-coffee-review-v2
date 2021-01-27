import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCkciz3qZmKQj19trhhUE10HsMWQ02rMV0",
    authDomain: "welly-coffee-review-8eda1.firebaseapp.com",
    projectId: "welly-coffee-review-8eda1",
    storageBucket: "welly-coffee-review-8eda1.appspot.com",
    messagingSenderId: "1033021267702",
    appId: "1:1033021267702:web:b2de3c5be2503ec79d96d7",
    measurementId: "G-9RH40FE8B2"
  }
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  const db = firebase.firestore()
export default db