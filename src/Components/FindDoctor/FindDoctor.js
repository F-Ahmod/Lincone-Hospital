import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';


const FindDoctor = () => {
    const [findDoctor, setfindDoctor] = useState([])
    useEffect(() => {
        fetch('FindDoctor.json')
            .then(res => res.json())
            .then(data => setfindDoctor(data));
    }, [])
    return (
        
        <div>
            <h2 className="text-center fw-blod">Find A Doctor</h2>
            <hr />
            <div className="container">
         
                {
                    findDoctor.map(doctor => <Doctor
                        
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
        </div>
        </div>
    );
};
export default FindDoctor;