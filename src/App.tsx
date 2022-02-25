import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
     <p> Pagina inicial</p>
     <BrowserRouter>
       <Routes>
         <Route path="/login" element={ <Login/> }/>
         <Route path="/"> <Navigate to="/login"/> </Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
