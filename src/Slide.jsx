import React, { useState } from "react";
import 'bootstrap/js/dist/dropdown';
import Carousel from 'react-bootstrap/Carousel'
import first from '../src/first.jpg'
import sec from '../src/sec.jpg'
import third from '../src/third.jpg'
import fourth from '../src/fourth.jpg'

function Slide() {

  return (
    <>
    <div className="slides">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={first}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={sec}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={third}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fourth}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
}

export default Slide;
