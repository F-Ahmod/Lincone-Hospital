import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import PragnencyDoctor from './PragnencyDoctor/PragnencyDoctor';
import img from '../images/sar1.jpg'
import img1 from '../images/sar1.jpg'
import img2 from '../images/sar1.jpg'
import { Carousel } from 'bootstrap';

const Pragnancy = () => {
    const [pragnancy, setPragnancy] = useState([])
    useEffect(() => {
        fetch('pragnancy.json')
            .then(res => res.json())
            .then(data => setPragnancy(data));
    }, [])
    return (   
    <div >
         <div className="row mt-5">
          <div className="col-md-8">
          <div className="mt-1 mb-5">
            <Carousel>
  <Carousel.Item>
    <img
    id="banner"
      className="d-block "
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className="text-secondary">Patiant Careing</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    id="banner"
      className="d-block "
      src={img1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2 className="text-secondary">Doctor with lovely patiant</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    id="banner"
      className="d-block "
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 className="text-secondary" >Family Planing</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>

          </div>
          <div className="col-md-4 ">
            <h2 className="text-light p-2">Aims & Objectives</h2>
            <p className="text-light p-2">
              <li>To promote awareness of health care among all sections of the Indian people.</li>
              <li>To promote awareness among functionaries involved in Health and Hospital Management.</li>
              <li>To promote research in the field of Health and Hospital Management.</li>
              <li>To promote the development of high quality hospital services and community health care.</li>
              <li>o provide opportunities for training and research in all aspects of Hospital Services Health Care Delivery System and Health Care Administration.</li>
              <li>To publish text books and periodic monographs on current and futuristic trends in health and hospital management.</li>
              <li>To publish text books and periodic monographs on current and futuristic trends in health and hospital management.</li>
            </p>
          </div>
        </div>


        <h2 className="text-center fw-blod text-light ">Our special pregnancy and Baby care service</h2>
        <hr />


        <div className=" caerti mt-5 mb-5">
     {
         pragnancy.map(doctors => <PragnencyDoctor
             
             key={doctors.id}
             doctors={doctors}
         ></PragnencyDoctor>)
     }
</div>
        </div>
   
    );
};

export default Pragnancy;