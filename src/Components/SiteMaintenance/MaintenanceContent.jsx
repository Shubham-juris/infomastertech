// src/components/SiteMaintenance/MaintenanceContent.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

// Define keyframes for animations
const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const MaintenanceContent = ({ onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(19, 18, 18, 0.31)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        animation: `${fadeIn} 1.5s ease-in-out`,
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 2, sm: 4, md: 6 },
        boxSizing: "border-box",
      }}
      onClick={onClose} // Clicking the overlay closes it
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        component="img"
        src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
        alt="Maintenance Logo"
        sx={{
          width: { xs: "80px", sm: "100px", md: "120px", lg: "140px", xl: "160px" },
          height: "auto",
          mb: { xs: 2, sm: 3, md: 4, lg: 5 },
          animation: isHovered ? `${pulse} 2s infinite` : "none",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
      />
      <Typography
        variant="h2"
        fontWeight="bold"
        color="white"
        sx={{
          fontSize: { xs: "18px", sm: "24px", md: "36px", lg: "48px", xl: "60px" },
          mt: { xs: 1, sm: 2, md: 3 },
          px: { xs: 1, sm: 2 },
          transition: "color 0.3s ease-in-out",
          wordWrap: "break-word",
        }}
      >
        Site Under Maintenance...
      </Typography>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="white"
        sx={{
          fontSize: { xs: "12px", sm: "16px", md: "20px", lg: "25px", xl: "30px" },
          mt: { xs: 1, sm: 2, md: 3 },
          px: { xs: 1, sm: 2 },
          maxWidth: { xs: "90%", sm: "85%", md: "80%" },
          transition: "color 0.3s ease-in-out",
          wordWrap: "break-word",
        }}
      >
        We're working hard to improve the user experience. Stay tuned!
      </Typography>
    </Box>
  );
};

// Parent wrapper component
const MaintenanceWrapper = ({ children }) => {
  const [showMaintenance, setShowMaintenance] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setShowMaintenance(true); // Show maintenance on any click
    };

    // Add global click listener
    document.addEventListener("click", handleClick);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array means it runs once on mount

  const handleClose = (e) => {
    e.stopPropagation(); // Prevent triggering the document listener
    setShowMaintenance(false); // Hide maintenance screen
  };

  return (
    <>
      {children}
      {showMaintenance && <MaintenanceContent onClose={handleClose} />}
    </>
  );
};

export default MaintenanceWrapper;