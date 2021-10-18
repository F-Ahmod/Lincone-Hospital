import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebaseconfig";



const initializeAuthentication =() =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;