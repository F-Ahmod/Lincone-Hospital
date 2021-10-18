import React from 'react';

const Doctor = ({doctor}) => {
    const {  img, specialty,education,name } = doctor;
    return (
        <div  className="services mb-5 rounded ">
            <div className="service-img">
            <img  className="rounded-circle photo" style={{height:"280px",width:"280px"}} src={img} alt="" />
            </div>
            <h2 className="p-2">{name}</h2>
            <h5 className="p-2">Specialty:-{specialty.slice(0, 40)}</h5>
            <p className="p-2">Education :-{education.slice(0, 50)}</p>
            <button type="button" class="btn btn-secondary " style={{marginLeft:"90px",marginBottom:"15px"}}>Secondary</button>
        </div>
    );
};

export default Doctor;