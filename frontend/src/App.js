import React, { useEffect } from 'react';
import './App.css';
import Routes from './routes/index';
import { useDispatch } from 'react-redux';
import { setUser } from './store/authSlice';

import { BrowserRouter as Router } from 'react-router-dom';
import authService from './services/authService';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const decodedToken = authService.decodedToken();
    console.log('====================================');
    dispatch(setUser(decodedToken));
    console.log('staing', decodedToken);

    console.log('====================================');
    return () => {};
  }, []);
  return (
    <div className='mx-auto'>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
