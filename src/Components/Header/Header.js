import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/lincoln_logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <img className="me-3" src={logo} alt="" srcset="" />
    {/* <NavLink className="navbar-brand fs-2" to="#">Navbar</NavLink> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active fs-5 fw-bold" aria-current="page" to="/home">Home</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/service">Service</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/finddoctor">Find Doctor</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/visitorPolicy">Visitors Policy</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/login">Login</NavLink>
        <NavLink className="nav-link fs-5 fw-bold" to="/singup">Sing-Up</NavLink>
        
      </div>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;