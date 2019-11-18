import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyA8Mp10BZNKB1jT7yS1AeJaWQDCQD47gDU",
    authDomain: "evernote-clone-c260f.firebaseapp.com",
    databaseURL: "https://evernote-clone-c260f.firebaseio.com",
    projectId: "evernote-clone-c260f",
    storageBucket: "evernote-clone-c260f.appspot.com",
    messagingSenderId: "233742654223",
    appId: "1:233742654223:web:cb1c71efbe41be00ec3c7a",
    measurementId: "G-MKEDCF9CVT"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
