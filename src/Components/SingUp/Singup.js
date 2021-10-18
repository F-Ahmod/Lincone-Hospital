import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import React, { useState } from 'react';

const Singup = () => {
 
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const auth=getAuth()

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
        <div  className="container d-flex justify-content-center">
        <form className="login" onSubmit={hendalSingUp} >

             <h2>Please Sing-Up </h2>            
             
             <input onChange={hendalEmail} type="email" name="email" id="" placeholder="Your Email" required/>               
             <br />
             <input onBlur={hendalPassword} type="password" name="" id="" placeholder="password" required />
            
            <input  style={{backgroundColor:'lightblue'}} type="submit" value="Sing-Up" />
             
         </form>
        
        
     </div>
    );
};

export default Singup;