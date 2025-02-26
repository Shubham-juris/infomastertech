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
import contactImage from "../../assets/contactimg.jpg";

// Styled components
const AnimatedSpan = styled("span")(({ delay }) => ({
  display: "inline-block",
  opacity: 0,
  animation: `fadeIn 0.5s ease-in-out ${delay}s forwards`,
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "translateY(10px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
}));

const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-12px) scale(1.03)",
    boxShadow: "0 16px 32px rgba(0, 188, 212, 0.5)",
  },
}));

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 8 },
        maxWidth: "1440px",
        margin: "0 auto",
        background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
        minHeight: "100vh",
        borderRadius: { xs: 0, sm: 4 },
        overflow: "hidden",
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

      <Grid container spacing={3} sx={{ justifyContent: "center", mt: 4 }}>
        {[
          { icon: <LocationOnIcon sx={{ fontSize: 40, color: "#00bcd4" }} />, title: "Address", content: "4804 42 Ave, Innisfail, Alberta, Canada" },
          { icon: <PhoneIcon sx={{ fontSize: 40, color: "#00bcd4" }} />, title: "Phone", content: "+1403-352-5061" },
          { icon: <EmailIcon sx={{ fontSize: 40, color: "#00bcd4" }} />, title: "Email", content: "Kreatesystems8@gmail.com" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AnimatedCard sx={{ p: 3, textAlign: "center", backgroundColor: "#263238", borderRadius: 3 }}>
              {item.icon}
              <Typography variant="h6" sx={{ color: "#ffffff", mt: 1, fontWeight: "bold" }}>{item.title}</Typography>
              <Typography sx={{ color: "#e0e0e0", mt: 1 }}>{item.content}</Typography>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} sx={{ mt: 6, alignItems: "center" }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "#ffffff", fontWeight: "bold" }}>Get in Touch</Typography>
            <Box component="img" src={contactImage} alt="Contact" sx={{ borderRadius: "50%", width: "200px", mt: 3, border: "4px solid #00bcd4" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "#263238",
              p: 4,
              borderRadius: 3,
              boxShadow: "0 4px 10px rgba(0, 188, 212, 0.3)",
            }}
          >
            <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
            <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required />
            <TextField label="Message" name="message" value={formData.message} onChange={handleChange} multiline rows={4} fullWidth required />
            <Button variant="contained" type="submit" sx={{ backgroundColor: "#00bcd4", color: "#ffffff", fontWeight: "bold" }}>Submit</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;