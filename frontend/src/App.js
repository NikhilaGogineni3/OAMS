import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, IconButton } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import logo from './components/logo.png';
import home from './components/home.png';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import FAQ from './components/FAQ';
import JoinUs from './components/JOINUS';
import Dropdownmenu from './components/Dropdownmenu'; 
import CampaignForm from './components/CampaignForm';

import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF69B4', // Your shade of pink for primary color
    },
    secondary: {
      main: '#FFFFFF', // White for secondary color
    },
  },
});


function App() {
  return (
    <Router>
      <ThemeProvider theme ={theme}>
      <div className="App">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar">
        <IconButton component ={Link} to="/campaign-form" color="primary">
            <AddIcon/>
          </IconButton>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/joinus">Join Us</Link></li>
          </ul>
          
          <Dropdownmenu />
        </div>
        <Routes>
          <Route
            path="/"
            element={(
              <Home
                image={home}
              />
            )}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/campaign-form" element={<CampaignForm />} />
        </Routes>
      </div>
    </ThemeProvider>
  </Router>
  );
}

export default App;
