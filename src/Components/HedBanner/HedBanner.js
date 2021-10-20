import React from 'react';
import './HedBanner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../images/black doctor 5.jpg'
import banner2 from '../images/black doctor.jpg'
import banner3 from '../images/blaxk doctor 4.jpg'


const HedBanner = () => {
    return (
        <div className="row mt-5">
          <div className="col-md-8">
          <div className="mt-1 mb-5">
            <Carousel>
  <Carousel.Item>
    <img
    id="banner"
      className="d-block "
      src={banner1}
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
      src={banner3}
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
      src={banner2}
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
    );
};

export default HedBanner;