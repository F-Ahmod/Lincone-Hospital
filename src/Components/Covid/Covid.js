import React from 'react';
import img from '../images/covid.jpg'
import './Covid.css'

const Covid = () => {
    return (
        <div className="row mb-5">
            <div className="col-md-6">
                <img style={{width:"633px",height:"378px"}} src={img} alt="" srcset="" />
            </div>
            
            <div className="col-md-6 covid">
                <h2 className="ms-3">International Certificate of COVID-19 Vaccination (COVID-19 Vaccine Passport)</h2>
                <p className="ms-3">When you have received your complete COVID-19 vaccination you will be issued a Thailand-specific certificate of COVID-19 vaccination from the place where you are vaccinated. If you would like to travel overseas, you may request a vaccine passport for the COVID-19 vaccination for foreign travel.</p>
                <h2 className="ms-3">Required Documents</h2>
                <p className="ms-3">
                <small>1. Original citizenship identification card (if applicable) and a signed copy.</small> <br />
                <small>2. Original passport with at least six months of validity and a signed copy</small>
                <br />
                <small>3. Electronic airline ticket that specifies the date of travel within three months of the issuance of the vaccine passport.</small>
                <br />
                <small>4. Fee of 50 Baht per passport.</small>
                
                </p>
            </div>
        </div>
    );
};

export default Covid;