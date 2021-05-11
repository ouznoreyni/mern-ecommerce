import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './routes/index';
import authService from './services/authService';
import { setUser } from './store/authSlice';


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
console.log();
export default App;
