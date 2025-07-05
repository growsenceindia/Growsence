import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPzp88ricpJHSuMJBP5EEuSPWEexEsc1g",
  authDomain: "growsence-7bd93.firebaseapp.com",
  projectId: "growsence-7bd93",
  storageBucket: "growsence-7bd93.appspot.com",
  messagingSenderId: "74181205561",
  appId: "1:74181205561:web:11234010a41a25b5c977e8",
  measurementId: "G-4VCNG6KSLC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };