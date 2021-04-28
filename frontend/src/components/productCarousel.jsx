import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../data.json';

const ProductCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const [products, setproducts] = useState(data.products);

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.name} className='w-full max-h-96'>
          <img
            className='max-h-full max-w-full'
            src={product.image}
            alt={product.name}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
