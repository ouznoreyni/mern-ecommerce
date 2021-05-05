import './App.css';
import Routes from './routes/index';
import Header from './components/header/header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='mx-auto'>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
