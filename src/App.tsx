import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
     <p> Pagina inicial</p>
     <BrowserRouter basename={ process.env.PUBLIC_URL }>
       <Routes>
         <Route path="/login" element={ <Login/> }/>
         <Route path="/" element={ <Login/> } />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
