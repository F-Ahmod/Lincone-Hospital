import React from 'react';


import useFirebase from '../useFirebase/useFirebase';

const Login = () => {

    const {xyz}=useFirebase();
    
    

    return (
<div className=" mt-5">
        <div  className="row">
        
        <div
         className="col-md-4">
            <img style={{height:"400px"}} src="" alt="" srcset="" />
        </div>
        <div className="col-md-5 roww">
            <form >
            <h2>Please login </h2>
            <br/>
            
            <input  className=" w-50"  type="email" value="Your Email" id="" />
            <br /><br />
            <input className=" w-50" type="password" value="password" id="" />
            <br /><br />
            <input type="submit" value="Sing-up" />


            <p>------------or------------</p>
            
           
            </form>
            <input onClick={xyz} className="btn w-50 bg-info rounded-3"  type="button" value="Sing In with Google" />
           
        </div>
        
        

    

    </div>
</div>
);
};

export default Login;