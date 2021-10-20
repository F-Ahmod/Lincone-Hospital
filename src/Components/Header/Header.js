import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import logo from '../images/lincoln_logo.png'
import useAuth from '../useAuth/useAuth';

import './Header.css'

const Header = () => {
  const {logOut,user}=useAuth()
  console.log(user?.email);

    return (
        <div >
          <div className="header row d-flex align-items-center ms-3 py-2">
             <div className="d-flex col-md-8 ">
              <h6 className="me-3"><i class="fab fa-facebook-square text-primary  "></i><Link to=""> Facbook</Link></h6>
                <h6 className="me-3"><i class="fab fa-youtube-square text-danger "></i><Link to=""> YouTube</Link></h6>
                <h6 className="me-3"><i class="fab fa-instagram-square  text-info"></i><Link to=""> instagram</Link></h6>
                
                <h6 className="me-3"><i class="fab fa-snapchat  text-warning"></i><Link to=""> Snapchat</Link></h6>    
          </div>
          <div className="cal-md-4 text-end ">
          
            {         
                   user.email &&
                   <aside  style={{marginLeft:"50%"}}>
                    <span className="ms-2 text-primary">{user?.displayName}</span>
                    <img className="rounded-circle" width="30" height="30" src={user?.photoURL} alt="" />
                    
                   </aside>
                }
            </div>
        </div>  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid ">
  <img id="nabimg" className="me-3" src={logo} alt="" srcSet="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse   px-5"  id="navbarNav">
      <ul class="navbar-nav ">
      <NavLink className="nav-link active fs-5 fw-bold" aria-current="page" to="/home">Home</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/service">Service</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/covid">Covid</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/finddoctor">Find Doctor</NavLink>
        
        <NavLink className="nav-link fs-5 fw-bold" to="/visitorPolicy">Visitors Policy</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/aboutus">Care</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/pragnancy">About us</NavLink>
        
        
        {!user?.email ?
       <>
          <NavLink className="nav-link fs-5 fw-bold" to="/login">Login</NavLink>

       <NavLink className="nav-link fs-5 fw-bold" to="/singup">Sing-Up</NavLink>
       </>
        :<button className="bg-secondary rounded-pill text-light text-center" onClick={logOut} > Sign Out</button>
        }
      </ul>
    </div>
  </div>
</nav>  
        </div>
    );
};

export default Header;