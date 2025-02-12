import { Route, Routes } from 'react-router-dom';


import HomePage from '../pages/Homepage';
import LoginPage from '../pages/Login';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/auth/login' element={<LoginPage/>} />
    </Routes>
  );
}

export default App;