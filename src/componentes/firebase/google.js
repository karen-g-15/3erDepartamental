// Importación de los módulos necesarios de React y Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAYkpRW4Kx8xj3WZOGrnXWjiiyC4zJl7HE",
    authDomain: "grupo15601-c06ab.firebaseapp.com",
    projectId: "grupo15601-c06ab",
    storageBucket: "grupo15601-c06ab.appspot.com",
    messagingSenderId: "526486037279",
    appId: "1:526486037279:web:4a02f2d2d727087ecc062a"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth();
  const google = new firebase.auth.GoogleAuthProvider()

  export {auth, google}