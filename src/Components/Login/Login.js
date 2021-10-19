import React from 'react';
import './Login.css'
import google from '../images/go.jpg'
import git from '../images/g.png'
import { Link } from 'react-router-dom';
import useFirebase from '../useFirebase/useFirebase';
const Login = () => {
    const {singinWithGitHub,singinWithGoogle}=useFirebase();
    
    return (

        <div className="singUp">
            <div id="singUpcontainer" className="singup-form ">
          <form className="sinup"  >         
             <h2>Please Sing In</h2>
             
             <br /> <br />
            <div className="text-center">
            <button className="mx-auto btn" onClick={singinWithGoogle}><img style={{height:"60px",width:"60px"}} src={google} alt="" srcset="" /></button>
            <button onClick={singinWithGitHub}><img style={{height:"60px",width:"60px"}} src={git} alt="" srcset="" /></button>
            </div>
            <Link className="text-dark" to="/login">If you a New User Sing-Up</Link>
         </form>
        
     </div>
        </div>

);
};

export default Login;