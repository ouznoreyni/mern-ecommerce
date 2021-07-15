import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import BillingInformations from '../components/BillingInformations';
import MainLayout from '../components/layout/MainLayout';
import Payment from '../components/Payment';
import ProductOrder from '../components/ProductOrder';
import ShippingAddress from '../components/ShippingAddress';
import Stepper from '../components/Stepper';

const validationSchema = Yup.object().shape({
	telephone: Yup.string().required('Required').min(5).max(50),
	country: Yup.string().required('Required').min(5).max(50),
	region: Yup.string().required('Required').min(5).max(50),
	city: Yup.string().required('Required').min(5).max(50),
});

const ShippingOrderScreen = () => {
	const currentUserSelector = useSelector(
		(state) => state.entities.auth.currentUser
	);
	const [currentStep, setCurrentStep] = useState(1);
	const [billingInformations, setBillingInformations] = useState({
		telephone: '',
		country: '',
		region: '',
		city: '',
	});

	const stepArray = ['Détails de facturation', 'Livraison', 'Paiement'];

	const handleClick = async (clickType) => {
		if (
			currentStep === 1 &&
			!(await validationSchema.isValid(billingInformations))
		) {
			alert('veillez saisir les information de livraison svp!');
			return;
		}
		let newStep = currentStep;
		clickType === 'next' ? newStep++ : newStep--;
		// Check if steps are within the boundary
		if (newStep > 0 && newStep <= stepArray.length) {
			setCurrentStep(newStep);
		}
	};
	const handleCheckout = async () => {
		const isValide = await validationSchema.validate(billingInformations);
		console.log('valide ', isValide);

		console.log('payer ', billingInformations);
	};

	const onChange = (e) => {
		setBillingInformations((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const onChangePayment = (e) => {
		console.log('change');
	};

	const components = [
		<BillingInformations onChange={onChange} values={billingInformations} />,
		<ShippingAddress
			values={billingInformations}
			currentUser={currentUserSelector}
		/>,
		<Payment onChange={onChangePayment} handleCheckout={handleCheckout} />,
	];

	return (
		<MainLayout>
			<>
				<div className='container horizontal mt-5 mb-12'>
					<Stepper steps={stepArray} currentStepNumber={currentStep} />
				</div>
				<div class='container mx-auto px-6'>
					<div class='flex flex-col lg:flex-row mt-8'>
						{/* 1 */}
						<div class='w-full lg:w-2/3 order-2'>
							{components[currentStep - 1]}
						</div>
						{/* 2 */}
						<div class='w-full mb-8 flex-shrink-0 order-1 lg:w-1/3 lg:mb-0 lg:order-2'>
							<ProductOrder />
						</div>
					</div>
				</div>

				<div className='container flex justify-around my-8 '>
					{currentStep > 1 ? (
						<button
							onClick={() => handleClick()}
							className='btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-yellow-300 text-orange-700 hover:text-white hover:bg-yellow-500 font-normal py-2 px-4 rounded'
						>
							Poursuivre vers {stepArray[currentStep - 2]}
						</button>
					) : null}

					<button
						onClick={
							currentStep === stepArray.length
								? () => handleCheckout()
								: () => handleClick('next')
						}
						className='btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-yellow-300  text-orange-700 hover:text-white hover:bg-yellow-500  font-normal py-2 px-4 rounded'
					>
						{currentStep === stepArray.length
							? 'Passer la commande'
							: `Poursuivre vers ${stepArray[currentStep]}`}
					</button>
				</div>
			</>
		</MainLayout>
	);
};

export default ShippingOrderScreen;
