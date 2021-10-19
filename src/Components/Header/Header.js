import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import logo from '../images/lincoln_logo.png'
import useFirebase from '../useFirebase/useFirebase';
import './Header.css'

const Header = () => {
  const {logOut,user}=useFirebase()
  console.log(user?.email);

    return (
        <div className="header">
          <div className="d-flex d-flex justify-content-end">
          <h6 className="me-3"><i class="fab fa-facebook-square text-primary fs-2 "></i><Link to=""> Facbook</Link></h6>
                <h6 className="me-3"><i class="fab fa-youtube-square text-danger fs-2"></i><Link to=""> YouTube</Link></h6>
                <h6 className="me-3"><i class="fab fa-instagram-square fs-2 text-info"></i><Link to=""> instagram</Link></h6>
                
                <h6 className="me-3"><i class="fab fa-snapchat fs-2 text-warning"></i><Link to=""> Snapchat</Link></h6>
                {
                    user.email &&
                   <aside  style={{marginLeft:"50%"}}>
                        <img className="rounded-circle" width="47" height="46" src={user?.photoURL} alt="" />
                    <span className="ms-2 text-primary">{user?.displayName}</span>
                   </aside>
                }
          </div>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <img className="me-3" src={logo} alt="" srcSet="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active fs-5 fw-bold" aria-current="page" to="/home">Home</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/service">Service</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/finddoctor">Find Doctor</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/visitorPolicy">Visitors Policy</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/aboutus">About us</NavLink>

       

        {!user?.email ?
       <>
          <NavLink className="nav-link fs-5 fw-bold" to="/login">Login</NavLink>

       <NavLink className="nav-link fs-5 fw-bold" to="/singup">Sing-Up</NavLink>
       </>
        :<button className="bg-secondary rounded-pill text-light" onClick={logOut} > Sign Out</button>
        }
      </div>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;