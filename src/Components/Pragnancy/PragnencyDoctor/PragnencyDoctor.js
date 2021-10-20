import React from 'react';
import './Pragnency.css'



const PragnencyDoctor = ({doctors}) => {


    const {  img, specialty,name,price} = doctors;

    
    return (
        <div class="card " >
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
<h4 class="card-title">Name of Service : {name}</h4>
    <p class="card-text fw-bold">Deccription : {specialty}</p>
    <p>Price : $ {price}</p>
    
   
  </div>
</div>

    );
};

export default PragnencyDoctor;