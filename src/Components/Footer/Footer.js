import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id="foot" className="row">
            <div className="col-md-3 mt-3">
                <h4 className="ps-3">ABOUT US</h4>
                <p className="ps-2">
                    About NYC Health + Hospitals
                    Our Mission & Values Leadership
                    Transformation Awards
                    </p>

            </div>
            <div className="col-md-3 mt-3">
                <h4>CONTACT US</h4>
                <p>
                Patient & Guest Relations
                Volunteering
                For Health Care Professionals
                Doing Business With Us
                Office of the Inspector General
                Like Our Website? 
                </p>

            </div>
            <div className="col-md-3 mt-3">
                <h4>QUALITY & INNOVATION</h4>
                <p>Arts in Medicine
                   Health Home – Care Coordination Program
                   Leadership in Health Care Reform
                Disaster Managemen</p>

            </div>
            <div className="col-md-3 mt-3">
                <h4>Follow Us</h4>
                <h6 ><i class="fab fa-facebook-square text-primary fs-2"></i><a href="">Facbook</a></h6>
                <h6 ><i class="fab fa-youtube-square text-danger fs-2"></i><a href="">YouTube</a></h6>
                <h6 ><i class="fab fa-instagram-square fs-2"></i><a href="">instagram</a></h6>
                
                <h6 ><i class="fab fa-snapchat fs-2 text-warning"></i><a href="">Snapchat</a></h6>

            </div>
            
        </div>
    );
};

export default Footer;