import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Stepper from '../components/Stepper';

const ShippingOrderScreen = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const stepArray = ['Détails de facturation', 'Livraison', 'Paiement'];
	const components = [
		'Formulaire Détails de facturation',
		'Formulaire Livraison',
		'Formulaire de Paiement',
	];
	const handleClick = (clickType) => {
		let newStep = currentStep;
		clickType == 'next' ? newStep++ : newStep--;
		// Check if steps are within the boundary
		if (newStep > 0 && newStep <= stepArray.length) {
			setCurrentStep(newStep);
		}
	};
	const handleCheckout = () => {
		console.log('payer');
	};
	return (
		<MainLayout>
			<>
				<div className='container horizontal mt-5 mb-12'>
					<Stepper steps={stepArray} currentStepNumber={currentStep} />
				</div>
				{components[currentStep - 1]}
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
