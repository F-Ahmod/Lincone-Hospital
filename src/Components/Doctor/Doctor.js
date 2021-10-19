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
        
            <div  class="card mb-3 ms-5 border-0" >
  <div class="row g-5 ">
    <div class="col-md-4 ">
      <img src={img} class="img-fluid rounded-start" style={{height:"159px"}} alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{specialty}</p>
        <p class="card-text">{education}</p>
        <button id="Seedoctor" onClick={()=> handelSeeDetails(`doctordetails/${id}`)} type="button" Classname="btn btn-secondary " style={{marginLeft:"90px",marginBottom:"15px"}}>Doctor</button>
      </div>
    </div>
  </div>
</div>
        

    );
};

export default Doctor;