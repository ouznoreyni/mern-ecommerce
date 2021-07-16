import React from 'react';
import './spinnerLoading.css';

const SpinnerLoading = () => {
	return (
		<section class='wrapper'>
			<div class='card'>
				<div class='loading'>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</section>
	);
};

export default SpinnerLoading;
