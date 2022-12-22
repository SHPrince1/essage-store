import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "../styles/slider.module.css";
import Carousel from 'react-bootstrap/Carousel';
import Supersale from '../images/supersale.webp'
import Slider2 from "../images/slider-2.webp"
import Slider4 from "../images/slider-4.webp"
import Container from 'react-bootstrap/Container';


const Slider = () => {
  return (
    <div className='Container'>
        <Container>
            <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Supersale} 
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider4} 
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider2} 
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </Container>

      
    </div>
  );
};

export default Slider;
