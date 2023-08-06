
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './HomeCarousel.css';

const data = [
  {
    image: require('../assets/img1.jpg'),
    caption: 'WINTER SALE',
    description: 'DON\'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS',
  },
  {
    image: require('../assets/img2.jpg'),
    caption: 'POPULAR SALE',
    description: 'SHOP TO GET THE BEST DISCOUNTS',
  },
];
   
const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel-container'>
      <div className='images'>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={2500}  indicators={false}>
          {data.map((slide, i) => {
            return (
              <Carousel.Item key={i}>
                <img
                  className='carousel-image'
                  src={slide.image}
                  alt=""
                />
                <div className='Textcont'>
                <Carousel.Caption>
                  <h3>{slide.caption}</h3>
                  <p>{slide.description}</p>
                  <button className='btn'>SHOP NOW</button>
                </Carousel.Caption>
                </div>
              </Carousel.Item>
              
            );
          })}
        </Carousel>
        
        
      </div>
    </div>
  );
};

export default HomeCarousel;
