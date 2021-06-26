import React from 'react';
import FooterLink from './FooterLink';

const Footer = () => {
	return (
		<footer className='topHeader pt-10 sm:mt-10 pt-10'>
			<div className='max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left'>
				<div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
					<div className='text-xs uppercase text-gray-400 font-medium mb-6'>
						SERVICE CLIENT
					</div>
					<FooterLink values="Centre d'assistance" />
					<FooterLink values='Méthodes de paiement' />
					<FooterLink values='Méthodes de livraison' />
					<FooterLink values='Politique de retour' />
					<FooterLink values='Signaler un Produit' />
				</div>

				<div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
					<div className='text-xs uppercase text-gray-400 font-medium mb-6'>
						A PROPOS
					</div>
					<FooterLink values='Qui sommes-nous' />
					<FooterLink values="Conditions Générales d'utilisation" />
					<FooterLink values='Propriété intellectuelle' />
					<FooterLink values='Politique de Confidentialité' />
				</div>

				<div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
					<div className='text-xs uppercase text-gray-400 font-medium mb-6'>
						RETROUVEZ-NOUS SUR
					</div>
					<FooterLink iconClass='fab fa-facebook-square' values='Facebook' />
					<FooterLink iconClass='fab fa-twitter' values='Twitter' />
					<FooterLink iconClass='fab fa-instagram' values='Instagram' />
					<FooterLink iconClass='fab fa-youtube' values='Youtube' />
				</div>

				<div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
					<div className='text-xs uppercase text-gray-400 font-medium mb-6'>
						GAGNEZ DE L'ARGENT
					</div>
					<FooterLink values='Vendez sur Sen-store' />
					<FooterLink values='Devenez un partenaire logistique de Sen-store' />
					<FooterLink values='Devenez consultant Sen-store' />
					<FooterLink values="Affiliation - Gagnez de l'argent !" />
				</div>
			</div>

			<div className='pt-2'>
				<div
					className='flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl'
				>
					<div className='mt-2'>
						© Copyright sen-store 2021. All Rights Reserved.
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
