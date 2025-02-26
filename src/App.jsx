import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/hero';
import ContactUs from './Components/ContactUs/ContactUs';
import MaintenanceContent from './Components/SiteMaintenance/MaintenanceContent';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <ContactUs/>
      <MaintenanceContent/>
    </>
  );
}

export default App;