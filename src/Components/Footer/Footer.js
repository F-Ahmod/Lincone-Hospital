import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div id="foot" className="row">
            <div className="col-md-3 mt-3 ">
                <div style={{marginLeft:"15px"}}>
                <h4 className="ps-3">ABOUT US</h4>
                <li>Home</li>
                <li>Service</li>
                <li>Covid Passport</li>
                <li>Find a Doctor</li>
                </div>

            </div>
            <div className="col-md-3 mt-3">
                <div style={{marginLeft:"15px"}}>
                <h4>CONTACT US</h4>
                <p>
                <li>Email:ahmod.fateh@gmail.com</li> 
                <li>Phone: +1646524892</li> 
                <li>Address: Bronx,0 st,Nyc,USA</li> 
                </p>
                </div>

            </div>
            <div className="col-md-3 mt-3 ">
                <div style={{marginLeft:"15px"}}>
                <h4>QUALITY & INNOVATION</h4>
                <li>Arts in Medicine</li>
                <li>Health Home – Care</li>
                <li>Coordination Program</li>
                <li>Leadership in Health Care</li>
                

            </div>
                </div>
            <div className="col-md-3 mt-3 ">
                <div style={{marginLeft:"15px"}}>
                <h4>Follow Us</h4>
                <h6 ><i class="fab fa-facebook-square text-primary fs-2"></i><Link href=""> Facbook</Link></h6>
                {/* <h6 ><i class="fab fa-youtube-square text-danger fs-2"></i><Link href=""> YouTube</Link></h6> */}
                <h6 ><i class="fab fa-instagram-square fs-2"></i><Link href=""> instagram</Link></h6>
                
                <h6 ><i class="fab fa-snapchat fs-2 text-warning"></i><Link href=""> Snapchat</Link></h6>

                </div>
            </div>
            
        </div>
        <div className="footer2 " >
                <p className="d-flex justify-content-center">Privacy Policy|Terms of Services|Cookies Policy</p>
                <small className="d-flex justify-content-center">© 2021 Bumrungrad International Hospital A Joint Commission International (JCI) accredited hospital
               </small>
            </div>
        </div>
    );
};

export default Footer;