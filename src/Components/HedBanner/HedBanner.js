import React from 'react';
import './HedBanner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../images/banner2.png'
import banner2 from '../images/banner3.webp'
import banner3 from '../images/banner.jpg'


const HedBanner = () => {
    return (
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
    );
};

export default HedBanner;