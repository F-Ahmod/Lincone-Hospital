import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './DoctorDetails.css'


const DoctorDetails = () => {

    const {doctorid} = useParams()

    const [doctor, setDoctor] = useState([]);
    
    // console.log(doctor);

    useEffect(() => {
        fetch("/FindDoctor.json")
            .then(res => res.json())
            .then(data =>setDoctor(data))

    }, [])
    

    

    const serviceDetails = doctor?.find(doctors => doctors.id === doctorid)
    console.log(doctor);

    return (

<div className="text-center">
<div className="card  my-5" >
  <img src={serviceDetails?.img} class="mx-auto" alt="..."/>
  <div className="card-body">
  <h3 className="card-text">{serviceDetails?.name}</h3>
    <h5 className="card-title">{serviceDetails?.specialty}</h5>
    <h5 className="card-title">{serviceDetails?.education}</h5>
    <Link to="/home" className="btn btn-secondary  " >Go Home</Link>
  </div>
</div>
</div>


    );
};

export default DoctorDetails;


// import React from 'react';

// const DoctorDetails = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default DoctorDetails;