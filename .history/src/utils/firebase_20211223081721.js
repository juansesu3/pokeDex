
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBADhELFDCoBC9mxEt3pCireMKh0Rr0g7Y",
    authDomain: "poke-dex-f6492.firebaseapp.com",
    projectId: "poke-dex-f6492",
    storageBucket: "poke-dex-f6492.appspot.com",
    messagingSenderId: "395379397040",
    appId: "1:395379397040:web:73e76dad518bba06c94675"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export {db, auth}