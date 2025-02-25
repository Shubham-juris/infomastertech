import React, { useState } from 'react';
import logo from '../../assets/Infomastertechlogo.png';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: 250,
        // Slide-in animation for Drawer content
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.label}
            component="a"
            href={item.href}
            sx={{
              // Hover effect for Drawer items
              '&:hover': {
                backgroundColor: 'rgba(25, 28, 221, 0.7)',
                transform: 'translateX(5px)', // Slight shift on hover
                transition: 'all 0.2s ease',
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          // Fade-in animation on load
          animation: 'fadeIn 1s ease-in',
          '@keyframes fadeIn': {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: '40px',
                borderRadius: '20px',
                transition: 'transform 0.3s ease', // Smooth scale effect
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} // Scale up on hover
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} // Reset on leave
            />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                href={item.href}
                sx={{
                  mx: 1,
                  // Hover effect for desktop buttons
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.05)', // Slight scale on hover
                  },
                }}  
              >
                {item.label}
              </Button>
            ))}
          </Box> 
          <IconButton
            color="inherit"
            edge="start"  
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: 'none' },
              // Slight bounce effect on click
              transition: 'transform 0.2s ease',
              '&:active': {
                transform: 'scale(0.9)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { sm: 'none' },
          '& .MuiDrawer-paper': {
            // Ensure Drawer matches the slide animation
            transition: 'transform 0.3s ease-in-out',
            transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;