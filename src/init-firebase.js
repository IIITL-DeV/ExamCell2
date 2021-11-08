import { initializeApp } from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword ,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'
import { useEffect, useState } from 'react';


const firebaseConfig = {
  apiKey: "AIzaSyAc4H2-0RmddJH9mz7IvJMmolSwTADR3uY",
  authDomain: "exam-cell-dev.firebaseapp.com",
  projectId: "exam-cell-dev",
  storageBucket: "exam-cell-dev.appspot.com",
  messagingSenderId: "777572030088",
  appId: "1:777572030088:web:6b16fbfbe98afccfa2f13d"
};
  
export const app =  initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function login(email,password) {
  return signInWithEmailAndPassword(auth,email,password);
}


//custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect (() => {
    const unsub = onAuthStateChanged(auth, (user) => { setCurrentUser(user) });
    return unsub;
  }, [])

  return currentUser;
}