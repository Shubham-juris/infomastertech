import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import contactImage from "../../assets/Infomastertechlogo.png"; // Adjust path as needed

// Styled component for animated spans (word-by-word animation)
const AnimatedSpan = styled("span")(({ delay }) => ({
  display: "inline-block",
  opacity: 0,
  animation: `wordFadeIn 0.5s ease-in-out ${delay}s forwards`,
  "@keyframes wordFadeIn": {
    "0%": { opacity: 0, transform: "translateY(20px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
}));

// Styled component for animated cards
const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  "&:hover": {
    transform: "translateY(-12px) scale(1.03)",
    boxShadow: "0 16px 32px rgba(0, 188, 212, 0.4)", // Cyan glow on hover
  },
}));

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (EmailJS is commented out)");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfoText =
    "At Greekology, we specialize in delivering tailored software solutions to empower your business. Contact us to discuss how our expertise can drive your success.";

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 8 },
        maxWidth: "1440px",
        margin: "0 auto",
        background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)", // Navy gradient
        minHeight: "100vh",
        borderRadius: { xs: 0, sm: 4 },
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
          fontWeight: "bold",
          color: "#ffffff",
          textShadow: "2px 2px 8px rgba(0, 188, 212, 0.3)",
        }}
      >
        Contact Us
      </Typography>

      {/* Contact Cards Section */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{ justifyContent: "center", mt: { xs: 2, sm: 4 } }}
      >
        {[
          {
            icon: <LocationOnIcon fontSize="large" sx={{ color: "#00bcd4" }} />,
            title: "Our Main Office",
            content: (
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#e0e0e0" }}
              >
                {/* dsasdsf */}
              </a>
            ),
          },
          {
            icon: <PhoneIcon fontSize="large" sx={{ color: "#00bcd4" }} />,
            title: "Phone Number",
            content: (
              <a
                // href="tel:+1780-234-4167"
                style={{ textDecoration: "none", color: "#e0e0e0" }}
              >
                {/* +1780-234-4167 */}
              </a>
            ),
          },
          {
            icon: <EmailIcon fontSize="large" sx={{ color: "#00bcd4" }} />,
            title: "Email",
            content: (
              <a
                href="mailto:example@gmail.com"
                style={{ textDecoration: "none", color: "#e0e0e0" }}
              >
                {/* example@gmail.com */}
              </a>
            ),
          },
        ].map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AnimatedCard
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                backgroundColor: "#263238",
                height: { xs: "auto", md: "200px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 8px 24px rgba(0, 188, 212, 0.2)",
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Box
                  sx={{
                    animation: "pulseIcon 2s infinite",
                    "@keyframes pulseIcon": {
                      "0%, 100%": { transform: "scale(1)" },
                      "50%": { transform: "scale(1.2)" },
                    },
                    mb: 2,
                  }}
                >
                  {card.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#ffffff",
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#e0e0e0",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  {card.content}
                </Typography>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>

      {/* Contact Info and Form Section */}
      <Grid
        container
        spacing={{ xs: 4, sm: 6 }}
        sx={{ mt: { xs: 4, sm: 6 }, alignItems: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center", p: { xs: 2, sm: 3 } }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: { xs: "1.5rem", sm: "1.75rem" },
              }}
            >
              Contact Info
            </Typography>
            <Typography
              sx={{
                lineHeight: 1.8,
                color: "#e0e0e0",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.5em",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                px: { xs: 1, sm: 0 },
              }}
            >
              {contactInfoText.split(" ").map((word, index) => (
                <AnimatedSpan key={index} delay={index * 0.2}>
                  {word}
                </AnimatedSpan>
              ))}
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Box
                component="img"
                src={contactImage}
                alt="Contact"
                className="contact-img"
                sx={{
                  borderRadius: "50%",
                  width: "100%",
                  maxWidth: { xs: "180px", sm: "240px" },
                  border: "4px solid #00bcd4",
                  boxShadow: "0 4px 12px rgba(0, 188, 212, 0.3)",
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            gutterBottom
            textAlign="center"
            sx={{
              fontWeight: "bold",
              color: "#ffffff",
              fontSize: { xs: "1.5rem", sm: "1.75rem" },
              animation: "bounceIn 1.5s ease",
              "@keyframes bounceIn": {
                "0%": { transform: "scale(0.8)", opacity: 0 },
                "60%": { transform: "scale(1.1)", opacity: 1 },
                "100%": { transform: "scale(1)" },
              },
            }}
          >
            Get in Touch
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2, sm: 3 },
              width: "100%",
              maxWidth: { xs: "100%", sm: "500px" },
              mx: "auto",
              p: { xs: 2, sm: 3 },
              backgroundColor: "#263238",
              borderRadius: 3,
              border: "2px solid #00bcd4", // Blue border
              boxShadow: "0 8px 24px rgba(0, 188, 212, 0.2)",
              animation: "runningLight 3s linear infinite", // Running light animation
              "@keyframes runningLight": {
                "0%": {
                  boxShadow:
                    "0 0 10px #00bcd4, 0 0 20px #00bcd4, 0 0 30px #00bcd4",
                },
                "25%": {
                  boxShadow:
                    "0 0 10px #00bcd4, 0 0 20px #00bcd4, -10px 0 30px #00bcd4",
                },
                "50%": {
                  boxShadow:
                    "0 0 10px #00bcd4, 0 0 20px #00bcd4, 0 10px 30px #00bcd4",
                },
                "75%": {
                  boxShadow:
                    "0 0 10px #00bcd4, 0 0 20px #00bcd4, 10px 0 30px #00bcd4",
                },
                "100%": {
                  boxShadow:
                    "0 0 10px #00bcd4, 0 0 20px #00bcd4, 0 0 30px #00bcd4",
                },
              },
            }}
          >
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "& fieldset": { borderColor: "#e0e0e0" },
                },
                "& .MuiInputLabel-root": { color: "#e0e0e0" },
                "& .MuiInputBase-input": { color: "#ffffff" },
              }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "& fieldset": { borderColor: "#e0e0e0" },
                },
                "& .MuiInputLabel-root": { color: "#e0e0e0" },
                "& .MuiInputBase-input": { color: "#ffffff" },
              }}
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  "& fieldset": { borderColor: "#e0e0e0" },
                },
                "& .MuiInputLabel-root": { color: "#e0e0e0" },
                "& .MuiInputBase-input": { color: "#ffffff" },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 2,
                backgroundColor: "#00bcd4",
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;