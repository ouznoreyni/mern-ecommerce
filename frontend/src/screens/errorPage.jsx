import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../components/Error';
import Header from '../components/header/header';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <Error />
    </>
  );
};

export default ErrorPage;
