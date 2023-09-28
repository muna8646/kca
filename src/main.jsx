import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes
import Stud from './pages/Students';
import Home from './pages/home';
import Cos from './pages/Topic.jsx';
import About from './pages/About';
import C from './pages/Contact';
import './App'
import  Log from './logs/SignupForm.jsx'
import  L from './logs/SigninForm'
import Foot from './footer'
import Ho from './pages/home';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <App/>
    <Routes> {/* Use Routes instead of Switch */}
      <Route path="/" element={<Ho />} />
      <Route path="/Topic" element={<Cos />} />
      <Route path="/Students" element={<Stud />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<C />} />
      <Route path="/SigninForm" element={< L />} />
      <Route path="/signup" element={< Log />} />
      <Route path="/footer" element={< Foot />} />

    </Routes>
  </BrowserRouter>
);
