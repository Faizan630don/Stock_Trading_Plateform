import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';  
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/SignUp';
import Login from './landing_page/login/Login';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<RedirectToDashboard/>}/>

      <Route path='/about' element={<AboutPage />}/>

      <Route path='/product' element={<ProductPage/>}/>

      <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='*' element={<NotFound/>}/>

      
    </Routes>
    <Footer/>
  </BrowserRouter>
);

function RedirectToDashboard(){
  useEffect(() => {
    const target = process.env.REACT_APP_DASHBOARD_URL;
    if (target) {
      window.location.href = target;
      return;
    }
    const ports = [3001, 3002, 3003, 3004].filter(p => String(p) !== window.location.port);
    let redirected = false;
    ports.forEach(p => {
      const img = new Image();
      img.onload = () => {
        if (redirected) return;
        redirected = true;
        window.location.href = `http://localhost:${p}/`;
      };
      img.src = `http://localhost:${p}/logo.png?cb=${Date.now()}`;
    });
    setTimeout(() => {
      if (!redirected) {
        alert('Dashboard server not detected. Please run npm start in dashboard folder.');
      }
    }, 1200);
  }, []);
  return <div style={{padding:"40px", textAlign:"center"}}>Redirecting to dashboard...</div>;
}


