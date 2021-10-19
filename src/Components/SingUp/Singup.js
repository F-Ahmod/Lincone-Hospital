import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useFirebase from "../useFirebase/useFirebase";
import './SingUp.css'
import google from '../images/g.png'
import git from '../images/go.jpg'

const Singup = () => {
 
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const auth=getAuth()
    const {singinWithGitHub,singinWithGoogle}=useFirebase();

    const hendalEmail=e=>{
        setEmail( e.target.value);

    }
    const hendalPassword=e=>{
     setPassword( e.target.value);

        
    }

 
    const hendalSingUp= e =>{
        
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        e.preventDefault()
     
    }
    
       

    return (
        <div className="singUp ">
            <div id="singUpcontainer" className="singup-form d-flex justify-content-center ">
        <form className="sinup1"  >         
             <h2>Please Sing Up</h2>
             <input onChange={hendalEmail} type="email" name="email" id="" placeholder="Your Email" required/>               
             <br />
             <input onBlur={hendalPassword} type="password" name="" id="" placeholder="password" required />
            
           
            <button id="button" className="bg-info text-center" onClick={hendalSingUp}>Sing Up</button>
            <br /><br />
            
             <Link className="" to="/login">If you already Sing-Up</Link>
             <br /> <br />

             <div className="text-center">
            <button className="mx-auto btn " onClick={singinWithGoogle}><img style={{height:"60px",width:"60px"}} src={google} alt="" srcset="" /></button>
            <button className="btn" onClick={singinWithGitHub}><img style={{height:"60px",width:"60px"}} src={git} alt="" srcset="" /></button>
            </div>
         </form>
        
     </div>
        </div>
    );
};

export default Singup;