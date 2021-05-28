import React from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import ProductForm from '../../../components/ProductForm';

const ProductCreation = () => {
	console.log('hello');
	return (
		<AdminLayout>
			<div className='sm:-mx-8 px-4 sm:px-8 overflow-x-auto'>
				<div className='inline-block min-w-full shadow-2xl rounded-lg overflow-hidden'>
					{/* products form */}
					<ProductForm />
				</div>
			</div>
		</AdminLayout>
	);
};

export default ProductCreation;
