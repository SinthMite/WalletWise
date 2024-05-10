import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRPlmcLygcQqbzt4V9ihiACU_v9Sk3Uk8",
    authDomain: "walletwise-ad9e2.firebaseapp.com",
    projectId: "walletwise-ad9e2",
    storageBucket: "walletwise-ad9e2.appspot.com",
    messagingSenderId: "8907690489",
    appId: "1:8907690489:web:ff763f6b5405ddf7382d28",
    measurementId: "G-H73PK6WXTH"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const Firebase = {
    db,
    auth,
    app
  };
  
  export default Firebase;