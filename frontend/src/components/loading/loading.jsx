import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const Loading = (show) => {
	const [height, setHeight] = useState();
	const ref = useRef(window);
	useEffect(() => {
		setHeight(ref.current.innerHeight);
	}, []);

	return (
		<div className='main-loader' style={{ height: height }}>
			<div className='container-loader'>
				<div className='flex-loader'>
					<div className='loader'></div>
				</div>
				<div className='loader-text'>chargement SenStore...</div>
			</div>
		</div>
	);
};

export default Loading;
