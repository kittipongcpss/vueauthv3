import { initializeApp } from "firebase/app";
import { getFirestore, getDoc,doc,updateDoc,deleteDoc,setDoc} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDgfEZ-EwkaDuURelY7K32o1d2LIhbvBs8",
  authDomain: "iotcom-dbc7b.firebaseapp.com",
  databaseURL: "https://iotcom-dbc7b-default-rtdb.firebaseio.com",
  projectId: "iotcom-dbc7b",
  storageBucket: "iotcom-dbc7b.appspot.com",
  messagingSenderId: "738935722385",
  appId: "1:738935722385:web:1d1cccfe557cfbc5fd8a30",
  measurementId: "G-1QS632QHN8",
  };


  const firebase = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebase);
const auth = getAuth(firebase);
const realtime = getDatabase(firebase );
  
  export { auth, firestore,realtime };

  