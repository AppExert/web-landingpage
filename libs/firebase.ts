import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/storage";

const FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGING_SENDER_ID =
  process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_APP_ID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
const FIREBASE_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

export const isFirebaseInitialitzed = () => !!firebase.apps.length;
export let isFirebaseUserInitiated = false;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

// check that window is in scope for the analytics module
console.log(firebase && firebase.apps.length, "firebaseapp", firebaseConfig)
if (typeof window !== "undefined" && !firebase.apps.length) {
  // Initialize Firebase
  if (firebaseConfig["projectId"]) {
    console.log("initialize firebase");
    try {
      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged(() => {
        isFirebaseUserInitiated = true;
      });
    } catch (error) {
      console.error(error, "error");
    }
  }

  // Initialize Firebase Analytics
  if ("measurementId" in firebaseConfig && isFirebaseInitialitzed())
    firebase.analytics();
  firebase.storage();
}
export default firebase;