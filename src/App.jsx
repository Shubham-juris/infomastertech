import React from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './Components/Navbar/Navbar';
import ContactUs from './Components/ContactUs/ContactUs';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <ContactUs />
    </>
  );
}

export default App;
