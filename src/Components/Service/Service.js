import React, { useEffect, useState } from 'react';
import Services from './Services/Services';
import  './Service.css'

const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('Searvice.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div>
            <h2 className="text-center fw-blod bg-secondary bg-gradient">Our Services</h2>
            <hr />
            <div className="container ">
            {/* d-flex flex-wrap */}
                {
                    service.map(service => <Services
                        key={service.id}
                        service={service}
                    ></Services>)
                }
        </div>
        </div>
    );
};

export default Service;



//     return (
//         <div id="services">
//             <h2 className="text-primary mt-5">Our services</h2>
//             <div className="service-container">
//                 
//             </div>
//         </div>
//     );
// };

// export default Service;