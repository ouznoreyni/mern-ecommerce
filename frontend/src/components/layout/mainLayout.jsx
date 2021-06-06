import React from 'react';
import Footer from '../footer';
import Header from '../header/header';

const MainLayout = ({ children }) => {
	return (
		<>
			<div className='w-full'>
				<Header />
				{children}
			</div>
			<Footer />
		</>
	);
};

export default MainLayout;
