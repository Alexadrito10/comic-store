// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthenticationStore } from "../stores/authentication";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLsq7xTk99t-O7OBiwFUk9esQEc0MRA0M",
  authDomain: "webavanzada-2022.firebaseapp.com",
  projectId: "webavanzada-2022",
  storageBucket: "webavanzada-2022.appspot.com",
  messagingSenderId: "331848780924",
  appId: "1:331848780924:web:ca7adac12d6fb214050df9",
  measurementId: "G-XXZE0SPNR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
    const authStore = useAuthenticationStore()
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      
      authStore.user = user;
      console.log(authStore.user)

    } else {
        authStore.user = null;
        console.log(authStore.user)
    }
  });


export {auth , db}