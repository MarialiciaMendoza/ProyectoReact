import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
