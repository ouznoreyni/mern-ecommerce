import React from 'react';
import './spinnerLoading.css';

const SpinnerLoading = () => {
	return (
		<section className='wrapper'>
			<div className='card'>
				<div className='loading'>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</section>
	);
};

export default SpinnerLoading;
