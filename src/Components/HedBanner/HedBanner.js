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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default HedBanner;