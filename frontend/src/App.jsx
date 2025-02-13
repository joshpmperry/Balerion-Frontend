import { Route, Routes } from 'react-router-dom';


import HomePage from '../pages/Homepage';
import LoginPage from '../pages/Login';
import ProtectedRoute from '../pages/auth/AuthRoute';

import './App.css';

function App() {
  return (
    <Routes>
      {/* Public Route (Not Protected) */}
      <Route path='/auth/login' element={<LoginPage/>} />

      {/* Private Route (Protected) */}
      <Route path='/' element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
        } />

    </Routes>
  );
}

export default App;