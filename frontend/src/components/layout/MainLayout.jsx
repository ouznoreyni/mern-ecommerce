import React from 'react';
import Footer from '../Footer';
import Header from '../header/Header';

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
