import React from 'react';
import './About.css'
import awerd4 from '../images/4.png'
import awerd5 from '../images/5.png'
import awerd6 from '../images/6.png'
import awerd7 from '../images/7.jpg'

const AboutUs = () => {
    return (
        <div className="row d-flex justify-content-center">
            <h2 className="text-center">Leading the Transformation in Health Care</h2>
            <p className="about p-5">

NYC Health + Hospitals/Lincoln has provided quality health care services to the community for 177 years. Since its inception, Lincoln has worked diligently to ensure the provision of quality medical care, programs and services to our community.  Lincoln has a rich and varied history that reflects the vibrant growth of the institution and the community it serves.

Today, Lincoln stands as a leader in the transformation in healthcare in the Downtown Bronx community. NYC Health + Hospitals/Lincoln is a full service acute care hospital and one of the premier trauma centers in the country. The hospital offers comprehensive primary, secondary, preventive and specialty care services.  Our Level 1 Trauma Center is the busiest in the northeast region. The Hospital is staffed by a team of more than 300 physicians and has an inpatient capacity of 362 beds, including 20 neonatal intensive care beds, 10 surgical intensive care beds, 8 pediatric intensive care beds, 7 coronary care beds, and an expanded 11 station renal dialysis unit.

NYC Health + Hospitals/Lincoln has its clinical affiliation with the Physicians Affiliation Group of New York, P.C., and an academic affiliation with the Weill Medical College of Cornell University, making Lincoln one of the most qualified, modern and technologically advanced hospitals in the country.  Many of our programs are nationally recognized for outstanding clinical outcomes that meet or exceed established benchmarks.  Our Centers of Excellence provide a level of care that places us at the forefront of medicine.

At NYC Health + Hospitals/Lincoln, service excellence means going beyond what is expected or required. We recognize and appreciate the diverse cultures we serve. We honor the right of all to be treated with dignity and respect. Our commitment to patients helps us provide an array of culturally competent health care services that benefit all New Yorkers.

Lincoln is a member of the NYC Health +Hospitals health care system.</p>
<h2 className="text-center mt-3 mb-5">OUR ACCREDITATIONS</h2>
            <div className=" d-flex flex-wrap mb-3">
                
                
                
                
                <img src={awerd4} alt="" srcset="" />
                <img src={awerd5} alt="" srcset="" />
                <img src={awerd6} alt="" srcset="" />
                <img src={awerd7} alt="" srcset="" />
                
            </div>
        </div>
    );
};

export default AboutUs;