import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Appartement from './pages/Appartement'
import './styles/index.css';
import reportWebVitals from './reportWebVitals.js';
import Header from './components/Header';
import Footer from './components/Footer'
import Error from './components/Error'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/appartement/:id' element={<Appartement />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
    </Router>
 </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
