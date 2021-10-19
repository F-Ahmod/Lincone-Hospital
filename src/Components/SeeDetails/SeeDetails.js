import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const SeeDetails = () => {

    const {serviceid } = useParams()

    const [services, setServices] = useState([]);
    
    // console.log(services);

    useEffect(() => {
        fetch("/Searvice.json")
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    

    const serviceDetails = services?.find(service => service.id === serviceid)
    return (

<div className="card mx-auto my-5" style={{width:"400px"}}>
  <img src={serviceDetails?.img} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{serviceDetails?.titel}</h5>
    <p className="card-text">{serviceDetails?.dse}</p>
    <Link to="/home" className="btn btn-secondary " style={{marginLeft:"120px"}}>Go Home</Link>
  </div>
</div>


    );
};

export default SeeDetails;