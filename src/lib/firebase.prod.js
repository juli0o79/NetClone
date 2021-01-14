import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyASvITh4poFTJ1_beb4TDMLfAZVhYxdmbw",
    authDomain: "netflix-65d28.firebaseapp.com",
    projectId: "netflix-65d28",
    storageBucket: "netflix-65d28.appspot.com",
    messagingSenderId: "233850349473",
    appId: "1:233850349473:web:ff31ca781aca689a288de0"
  };

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };