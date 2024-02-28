import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsLLXZE4WSipmdC3rByCiCBa1TJCBLlQE",
  authDomain: "test-coderhouse-79aae.firebaseapp.com",
  projectId: "test-coderhouse-79aae",
  storageBucket: "test-coderhouse-79aae.appspot.com",
  messagingSenderId: "128039100261",
  appId: "1:128039100261:web:64a9e72cf3de8c2bfe0b8c"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)