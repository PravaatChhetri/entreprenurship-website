import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'linear',
    ref: sliderRef
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="image1.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="image2.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="image3.jpg" alt="Image 3" />
      </div>
      {/* Add more images as needed */}
    </Slider>
  );
};

export default Carousel;
