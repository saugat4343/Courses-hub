import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';


function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<Login />} /> 
        <Route path='/courses' element={<Courses />}/>
        <Route path="/register" element={<Register />} /> 
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
