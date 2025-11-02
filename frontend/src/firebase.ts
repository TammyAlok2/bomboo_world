import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Add this for authentication//
// update packages  // updaet

const firebaseConfig = {
  apiKey: "AIzaSyDkTZRwtDK_P-MCSGYh3kkMe9v-0aSOziU",
  authDomain: "bombooworld-ac27a.firebaseapp.com",
  projectId: "bombooworld-ac27a",
  storageBucket: "bombooworld-ac27a.firebasestorage.app",
  messagingSenderId: "80642417540",
  appId: "1:80642417540:web:631cad0696eba28422b3d1",
  measurementId: "G-DL1KJHXP5R"
};

// Initialize Firebase  
const firebase = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(firebase); // Add authentication

export { firebase, auth }; // Export all services
