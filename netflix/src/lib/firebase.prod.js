import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//import { seedDatabase } from '../seed';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export {firebase};

const db = firebase.firestore();

export {db};