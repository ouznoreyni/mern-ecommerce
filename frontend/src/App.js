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
    dispatch(setUser(decodedToken));
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
