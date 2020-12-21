import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDT_hdFTtH2B4K1d2iIdyjeXbYL5d7IFO4",
    authDomain: "chatapp-451db.firebaseapp.com",
    databaseURL: "https://chatapp-451db.firebaseio.com",
    projectId: "chatapp-451db",
    storageBucket: "chatapp-451db.appspot.com",
    messagingSenderId: "440939081984",
    appId: "1:440939081984:web:061159d54b75631fd243e5"
}

firebase.initializeApp(firebaseConfig)

export default firebase
export const auth = firebase.auth()