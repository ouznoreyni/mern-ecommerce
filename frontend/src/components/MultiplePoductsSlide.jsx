import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import CardProduct from './card/cardProduct';

const MultiplePoductsSlide = ({ products }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
	return (
		<div>
			<Slider {...settings}>
				{products.map((p) => (
					<div className='m-5'>
						<CardProduct key={p._id} product={p} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default MultiplePoductsSlide;
