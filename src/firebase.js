import firebase from 'firebase/app';
import 'firebase/firestore'


const app = firebase.initializeApp({
  apiKey: "AIzaSyDk1uwJNtYXTJMuVrJqgBE-1oH5IA3n1Xw",
  authDomain: "bajoceroeggers.firebaseapp.com",
  projectId: "bajoceroeggers",
  storageBucket: "bajoceroeggers.appspot.com",
  messagingSenderId: "957508176232",
  appId: "1:957508176232:web:4e63c2a78aed1b65a2eedd",
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}