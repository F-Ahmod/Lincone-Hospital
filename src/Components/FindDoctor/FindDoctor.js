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
        <div className="container">
                {
                    findDoctor.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
        </div>
    );
};
export default FindDoctor;