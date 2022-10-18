import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyACnsCsOgSkp-fpDr_P3AoJIJ6j1vtmw-s", //Se requiere para crear documentos no para traerlos
  authDomain: "hypecitymarconi.firebaseapp.com",
  projectId: "hypecitymarconi",
  storageBucket: "hypecitymarconi.appspot.com",
  messagingSenderId: "997678724690",
  appId: "1:997678724690:web:278b133a027d4c9143918b"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);