import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDec2bdG8nGGvjOrLr4EdbBRIG7-wm-nfs",
  authDomain: "full-stack-todo-4338a.firebaseapp.com",
  projectId: "full-stack-todo-4338a",
  storageBucket: "full-stack-todo-4338a.firebasestorage.app",
  messagingSenderId: "489702861583",
  appId: "1:489702861583:web:e66b8fbe75191a32602c7a",
  measurementId: "G-1CDJYNNN66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth=getAuth(app);
export default auth 