import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";
import backgroundImage from "../../assets/BackgroundImg.jpg";

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

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(19, 18, 18, 0.44)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          animation: `${fadeIn} 1.5s ease-in-out`,
        }}
      >
        <Box
          component="img"
          src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
          alt="Maintenance Logo"
          sx={{
            height: "160px",
            mb: "22px",
            animation: isHovered ? `${pulse} 2s infinite` : "none",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)", // Additional hover effect
            },
          }}
        />
        <Typography
          variant="h2"
          fontWeight="bold"
          color={isHovered ? "white" : "white"} // Changed to a noticeable color shift
          sx={{
            fontSize: { xs: "20px", sm: "24px", md: "40px", lg: "60px" },
            mt: 2,
            transition: "color 0.3s ease-in-out",
          }}
        >
          Site Under Maintenance...
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          color={isHovered ? "white" : "white"} // Changed to a noticeable color shift
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "25px", lg: "30px" },
            mt: 2,
            transition: "color 0.3s ease-in-out",
          }}
        >
          We're working hard to improve the user experience. Stay tuned!
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;