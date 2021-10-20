import React from 'react';
import { useHistory } from 'react-router';
import './Services.css'

const Services = ({service}) => {
    const {  titel, dse, img ,id} = service;
    
   
    const history=useHistory()

    const handelSeeDetails=(url)=>{
       history.push(url)
    }

    return (
        <div  className="services mb-5 mx-auto rounded ">
            <div className="service-img " >
            <img  className="rounded-circle photo " style={{height:"280px",width:"280px"}} src={img} alt="" />
            </div>
            <h5 className="p-5">{titel}</h5>
            <p className="p-2">Description :{dse.slice(0, 90)}</p>
            
            <button onClick={()=> handelSeeDetails(`seedetails/${id}`)} type="button" class="btn btn-secondary details" >See Details</button>
        </div>
    );
};

export default Services;