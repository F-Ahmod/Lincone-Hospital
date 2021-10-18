import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/lincoln_logo.png'
import useFirebase from '../useFirebase/useFirebase';
import './Header.css'

const Header = () => {
  const {user}=useFirebase()
  console.log(user);
    return (
        <div className="header">
          <div className="d-flex d-flex justify-content-end">
          <h6 className="me-3"><i class="fab fa-facebook-square text-primary fs-2 "></i><a href=""> Facbook</a></h6>
                <h6 className="me-3"><i class="fab fa-youtube-square text-danger fs-2"></i><a href=""> YouTube</a></h6>
                <h6 className="me-3"><i class="fab fa-instagram-square fs-2 text-info"></i><a href=""> instagram</a></h6>
                
                <h6 className="me-3"><i class="fab fa-snapchat fs-2 text-warning"></i><a href=""> Snapchat</a></h6>
          </div>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <img className="me-3" src={logo} alt="" srcSet="" />
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
        <NavLink className="nav-link fs-5 fw-bold" to="/aboutus">About us</NavLink>

        {
        !user.email
        ?
        (
        <>

        <NavLink className="nav-link fs-5 fw-bold" to="/login">Login</NavLink>

        <NavLink className="nav-link fs-5 fw-bold" to="/singup">Sing-Up</NavLink>

        </>
        )
        : (<button>Singout</button>)}
      </div>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;