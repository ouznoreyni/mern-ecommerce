import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { converTobase64 } from '../utils/convertTobase64';

const ProductCarousel = ({ products }) => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return !products ? (
		'loading'
	) : (
		<Slider {...settings}>
			{products.map((product) => (
				<div key={product._id}>
					<Link to='#' className='h-1/4 rounded-lg shadow-lg bg-gray-600'>
						<img
							className='inline-block'
							src={`data:image/jpeg;base64,${converTobase64(product)}`}
							alt={product.title}
						/>
					</Link>
				</div>
			))}
		</Slider>
	);
};

export default ProductCarousel;
