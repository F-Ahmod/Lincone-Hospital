import React from 'react';
import './Services.css'

const Services = ({service}) => {
    const {  titel, dse, img } = service;

    return (
        <div  className="services mb-5 rounded ">
            <div className="service-img">
            <img  className="rounded-circle photo" style={{height:"280px",width:"280px"}} src={img} alt="" />
            </div>
            <h5 className="p-2">{titel}</h5>
            <p className="p-2">Description :{dse}</p>
        </div>
    );
};

export default Services;