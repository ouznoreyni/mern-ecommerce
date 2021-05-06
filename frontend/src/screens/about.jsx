import React from 'react';
import Header from '../components/header/header';
import Footer from './footer';

const About = () => {
  return (
    <>
      <Header />
      <section class='container mx-auto px-6 py-10'>
        <h2 class='text-4xl font-bold text-center text-gray-800 mb-2'>
          A PROPOS DE NOUS
        </h2>
        <div class='flex items-center flex-wrap mb-10'>
          <div class='w-full md:w-1/2 px-4'>
            <h4 class='text-3xl text-gray-800 font-bold mb-3'>
              Fournir des produits 100% authentiques
            </h4>
            <p class='text-gray-600 mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div class='w-full md:w-1/2 px-4'>
            <img
              src='https://cdn.dribbble.com/users/7119525/screenshots/15392397/media/8a8c0fcc6e2a92b3769d562343f5e2b0.jpg'
              alt='produit authentiques'
            />
          </div>
        </div>
        <div class='flex items-center flex-wrap mb-20'>
          <div class='w-full md:w-1/2 px-4'>
            <img
              src='https://cdn.dribbble.com/users/879147/screenshots/15364884/media/4d04d1c0ef31f79b94f868d7e593bf6d.png'
              alt='meilleurs prix'
            />
          </div>
          <div class='w-full md:w-1/2 px-4'>
            <h4 class='text-3xl text-gray-800 font-bold mb-3'>
              Avec les meilleurs prix au Sénégal
            </h4>
            <p class='text-gray-600 mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class='flex items-center flex-wrap mb-20'>
          <div class='w-full md:w-1/2 px-4'>
            <h4 class='text-3xl text-gray-800 font-bold mb-3'>
              Vous apporter la meilleure assistance au Sénégal
            </h4>
            <p class='text-gray-600 mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class='w-full md:w-1/2 px-4'>
            <img
              src='https://statuscast.com/wp-content/uploads/2018/12/untitled-1@3x.png'
              alt='assistance'
            />
          </div>
        </div>
      </section>
      <section class='bg-gray-100'>
        <div class='container mx-auto px-6 py-20'>
          <h2 class='text-4xl font-bold text-center text-gray-800 mb-8'>
            Témoignages
          </h2>
          <div class='flex flex-wrap'>
            <div class='w-full md:w-1/3 px-2 mb-4'>
              <div class='bg-white rounded shadow py-2'>
                <p class='text-gray-800 text-base px-6 mb-5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Error fugit velit eaque accusantium perspiciatis quos
                  reiciendis
                </p>
                <p class='text-gray-500 text-xs md:text-sm px-6'>
                  Ousmane DIOP
                </p>
              </div>
            </div>
            <div class='w-full md:w-1/3 px-2 mb-4'>
              <div class='bg-white rounded shadow py-2'>
                <p class='text-gray-800 text-base px-6 mb-5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Error fugit velit eaque accusantium perspiciatis quos
                  reiciendis
                </p>
                <p class='text-gray-500 text-xs md:text-sm px-6'>Fatou Ba</p>
              </div>
            </div>
            <div class='w-full md:w-1/3 px-2 mb-4'>
              <div class='bg-white rounded shadow py-2'>
                <p class='text-gray-800 text-base px-6 mb-5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Error fugit velit eaque accusantium perspiciatis quos
                  reiciendis
                </p>
                <p class='text-gray-500 text-xs md:text-sm px-6'>
                  Khadim Ndiaye
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
