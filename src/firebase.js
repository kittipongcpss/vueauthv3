import { initializeApp } from "firebase/app";
import { getFirestore, getDoc,doc,updateDoc,deleteDoc,setDoc} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
  };


  const firebase = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebase);
const auth = getAuth(firebase);
const realtime = getDatabase(firebase );
  
  export { auth, firestore,realtime };

  
