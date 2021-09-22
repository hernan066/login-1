// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
//import { getAuth } from "firebase/auth";
//import { app } from "../firebase";
//import app from 'firebase/app'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtJta4XuJwvqe4avcDBw92ZIHG9NmjYxY",
  authDomain: "crud-react-hernan.firebaseapp.com",
  projectId: "crud-react-hernan",
  storageBucket: "crud-react-hernan.appspot.com",
  messagingSenderId: "466425888277",
  appId: "1:466425888277:web:7ddba2735b7bb228b7981c"
};

// Initialize Firebase
//Usar los import solo en el componente que lo va a usar
// asignar los get a una const y darle el parametro app, que es la config de firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
//const auth = getAuth(app)

//export {db, auth, app};
export default app;