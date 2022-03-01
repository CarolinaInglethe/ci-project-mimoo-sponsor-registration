import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Sponsors from './pages/ Sponsors';
import ForgotPassword from './pages/ForgotPassword';
import CreateSponsor from './pages/CreateSponsor';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/sponsors" element={ <Sponsors /> } />
          <Route path="/forgotPassword" element={ <ForgotPassword /> } />
          <Route path="/createSponsor" element={ <CreateSponsor /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
