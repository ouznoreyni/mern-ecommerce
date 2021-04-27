import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Register from '../screens/register';
import Login from '../screens/login';
import Home from '../screens/home';
import ErrorPage from '../screens/errorPage';
import About from '../screens/about';
import Contact from '../screens/contact';

const index = () => {
  return (
    <Switch>
      <Route exact path='/register'>
        <Register />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='*'>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default index;
