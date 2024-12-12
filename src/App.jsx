import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';  
import Navbar from './components/Navbar';
import Modal from 'react-modal';

function App() {
  Modal.setAppElement('#root'); 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />  
        <Route 
          path="/profile" 
          element={
            localStorage.getItem('loggedIn') ? (
              <ProfilePage />
            ) : (
              <LoginPage />
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
