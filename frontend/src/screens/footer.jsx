import React from 'react';

const Footer = () => {
  return (
    <footer class='topHeader pt-10 sm:mt-10 pt-10'>
      <div class='max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left'>
        <div class='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
          <div class='text-xs uppercase text-gray-400 font-medium mb-6'>
            SERVICE CLIENT
          </div>

          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Centre d'assistance
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Méthodes de paiement
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Méthodes de livraison
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Politique de retour
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Signaler un Produit
          </a>
        </div>

        <div class='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
          <div class='text-xs uppercase text-gray-400 font-medium mb-6'>
            A PROPOS
          </div>

          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Qui sommes-nous
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Conditions Générales d'utilisation
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Propriété intellectuelle
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Politique de Confidentialité
          </a>
        </div>

        <div class='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
          <div class='text-xs uppercase text-gray-400 font-medium mb-6'>
            RETROUVEZ-NOUS SUR
          </div>

          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            <i class='fab fa-facebook-square'></i> Facebook
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            <i class='fab fa-twitter'></i> Twitter
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            <i class='fab fa-instagram'></i> Instagram
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            <i class='fab fa-youtube'></i> Youtube
          </a>
        </div>

        <div class='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
          <div class='text-xs uppercase text-gray-400 font-medium mb-6'>
            GAGNEZ DE L'ARGENT
          </div>

          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Vendez sur Sen-store
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Devenez un partenaire logistique de Sen-store
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Devenez consultant Sen-store
          </a>
          <a
            href='#'
            class='my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700'
          >
            Affiliation - Gagnez de l'argent !
          </a>
        </div>
      </div>

      <div class='pt-2'>
        <div
          class='flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl'
        >
          <div class='mt-2'>
            © Copyright sen-store 2021. All Rights Reserved.
          </div>

          <div class='md:flex-auto md:flex-row-reverse mt-2 flex-row flex'>
            <a href='#' class='w-6 mx-1'>
              <i class='uil uil-facebook-f'></i>
            </a>
            <a href='#' class='w-6 mx-1'>
              <i class='uil uil-twitter-alt'></i>
            </a>
            <a href='#' class='w-6 mx-1'>
              <i class='uil uil-youtube'></i>
            </a>
            <a href='#' class='w-6 mx-1'>
              <i class='uil uil-linkedin'></i>
            </a>
            <a href='#' class='w-6 mx-1'>
              <i class='uil uil-instagram'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
