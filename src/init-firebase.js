import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAc4H2-0RmddJH9mz7IvJMmolSwTADR3uY",
    authDomain: "exam-cell-dev.firebaseapp.com",
    projectId: "exam-cell-dev",
    storageBucket: "exam-cell-dev.appspot.com",
    messagingSenderId: "777572030088",
    appId: "1:777572030088:web:6b16fbfbe98afccfa2f13d"
};
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)