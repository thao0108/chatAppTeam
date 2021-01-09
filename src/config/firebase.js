import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD8Xha5VfTzt8WHR5pvXZ7oF7MbBXJCtuc",
    authDomain: "chatapp-team.firebaseapp.com",
    projectId: "chatapp-team",
    storageBucket: "chatapp-team.appspot.com",
    messagingSenderId: "1002553925577",
    appId: "1:1002553925577:web:8f1ca5883e547b92dd1218",
    measurementId: "G-1TGQV27ZY8"
  };
  

firebase.initializeApp(firebaseConfig)

export default firebase
export const auth = firebase.auth()