import React, { useState } from "react";
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md")); // Tablet view
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Mobile view

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home" },
    { label: "About" },
    { label: "Services"},
    { label: "Contact"},
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#1E1E2F",
          color: "#FFFFFF",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          padding: isTablet ? "8px 0" : "10px 0",
        }}
      >
        <Toolbar>
          <Typography
            variant={isMobile ? "h5" : isTablet ? "h5" : "h4"} 
            sx={{
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: "1px",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            Kreate Systems
          </Typography>

          {/* Desktop & Tablet Navigation */}
          {!isMobile && (
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: isTablet ? "1rem" : "1.2rem", 
                    mx: isTablet ? 1 : 2,
                    padding: isTablet ? "8px 16px" : "10px 20px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                transition: "transform 0.2s ease",
                "&:active": {
                  transform: "scale(0.9)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: "#2A2A3C",
            color: "#FFFFFF",
            transition: "transform 0.3s ease-in-out",
          },
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
                padding: "15px 20px",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateX(5px)",
                  transition: "all 0.2s ease",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "1.3rem", // Adjusted font size for mobile
                  fontWeight: 600,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
