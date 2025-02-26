import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../../assets/background.jpg";

const Hero = () => {
  const [showText, setShowText] = useState(true);

  const handleClick = () => {
    setShowText(false);
  };

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
        
      }}
      onClick={handleClick}
    >
      {showText && (
        <Box
          sx={{
            textAlign: "center",
            color: "Pink",
            padding: { xs: 2, sm: 4, md: 6 }, 
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderRadius: 2,
            maxWidth: { xs: "90%", sm: "80%", md: "60%" }, 
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Professional Tech For Your Business
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, 
            }}
          >
            At Kreate Systems, We Specialize in Web development, Graphic
            designing, and Marketing
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Hero;