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

const envDash = process.env.REACT_APP_DASHBOARD_URL;
try { if (envDash) localStorage.setItem('dashboard_url', envDash); } catch {}
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
    const envDash2 = process.env.REACT_APP_DASHBOARD_URL;
    const savedDash2 = localStorage.getItem('dashboard_url');
    const validSaved2 = savedDash2 && /dashboard|localhost:3002/.test(savedDash2) ? savedDash2 : null;
    const target = envDash2 || validSaved2 || (window.location.hostname === 'localhost' ? 'http://localhost:3002/' : null);
    if (target) {
      window.location.href = target;
      return;
    }
    window.location.href = '/';
  }, []);
  return <div style={{padding:"40px", textAlign:"center"}}>Redirecting to dashboard...</div>;
}


