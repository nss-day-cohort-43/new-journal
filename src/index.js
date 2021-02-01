import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './scss/custom.scss';


import { firebaseConfig } from "./components/fbAuth/firebaseConfig";
import firebase from "firebase/app";

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

