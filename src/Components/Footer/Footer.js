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
                    Diversity is Our Specialty
                    Publications & Reports
                    Public Meetings & Notices
                    Policies & Procedures</p>

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
                   Modern Facilities
                   Centers of Excellence
                   Simulation Center
                   Institute for Diseases and Disaster Managemen</p>

            </div>
            <div className="col-md-3 mt-3">
                <h4>NEWS</h4>
                <p>Press Releases
                  In the News 
                  <br />
                  Social Media</p>

            </div>
            
        </div>
    );
};

export default Footer;