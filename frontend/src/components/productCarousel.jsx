import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [products, setproducts] = useState(data.products.slice(0, 3));

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.name}>
          <Link
            to='#'
            className='block h-80 rounded-lg shadow-lg bg-gray-600'
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
            }}
          ></Link>
        </div>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
