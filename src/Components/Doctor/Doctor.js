import React from 'react';
import { useHistory } from 'react-router';
import './Doctor.css'

const Doctor = ({doctor}) => {


    const {  img, specialty,education,name,id } = doctor;

    const history=useHistory()

    const handelSeeDetails=(url)=>{
       history.push(url)
    }
    return (
        
 <div id="services"  class="service card mb-3 mx-auto border-0" >
  <div class="row g-5 ">
    <div class="service-img col-md-4 ">
    <img  className="rounded-circle photo " style={{height:"180px",width:"180px"}} src={img} alt="" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{specialty}</p>
        <p class="card-text">{education}</p>
        <button id="Seedoctor" onClick={()=> handelSeeDetails(`doctordetails/${id}`)} type="button" Classname="btn btn-secondary " style={{marginLeft:"50px",marginBottom:"15px"}}>See Doctor Details</button>
      </div>
    </div>
  </div>
</div>
        

    );
};

export default Doctor;