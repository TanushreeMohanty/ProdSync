import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config'; // Firebase auth
import { useTheme } from '@mui/material/styles';
import logo from "../assets/logo.png"; // Import your logo here

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  // Firebase authentication check
  useEffect(() => {
    const user = auth.currentUser;
    setCurrentUser(user);
  }, []);

  // Handle Get Started button click
  const handleGetStarted = () => {
    if (currentUser) {
      navigate('/home');  // Redirect to dashboard if authenticated
    } else {
      navigate('/login');  // Redirect to login if not authenticated
    }
  };

  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F1FAEE' }} maxWidth="100%">
      {/* Hero Section */}
      <Box sx={{
        backgroundColor: '#0A9396',
        color: 'white',
        padding: { xs: '6rem 0', sm: '8rem 0' },
        textAlign: 'center',
        backgroundImage: 'linear-gradient(to bottom, rgba(10, 147, 150, 0.7), rgba(10, 147, 150, 0.9))',
        boxShadow: '0 4px 10px rgba(10, 147, 150, 0.3)',
        flex: 1
      }}>
        <Typography variant="h2" sx={{
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          letterSpacing: 1.5,
          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' }
        }}>
        <img src={logo} alt="Logo" className="logo-landing" /> ProdSync
        </Typography>
        <Typography variant="h5" sx={{
          marginBottom: '2.5rem',
          maxWidth: '700px',
          marginX: 'auto',
          fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.5rem' },
          opacity: 0.9
        }}>
Build smarter with ProdSync, a scalable Product Management System powered by React and Firebase. </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            padding: '1.2rem 3rem',
            cursor: 'pointer',
            borderRadius: '25px',
            boxShadow: '0px 4px 10px rgba(10, 147, 150, 0.3)',
            backgroundColor: '#94D2BD',
            '&:hover': { backgroundColor: '#82B7A0' },
            color: '#000',
          }}
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </Box>

      {/* Footer Section */}
      <Box
  sx={{
    backgroundColor: "#333",
    color: "white",
    padding: "1.5rem 0",
    textAlign: "center",
    marginTop: "auto",
    width: "100%",
    position: "relative",
  }}
>
  <Typography
    variant="body2"
    sx={{
      fontSize: { xs: "0.9rem", sm: "1rem" },
      color: "#ccc",
    }}
  >
    &copy; {new Date().getFullYear()} ProdSync. All rights reserved.
  </Typography>
  <Typography
    variant="body2"
    sx={{
      fontSize: { xs: "0.85rem", sm: "0.95rem" },
      color: "#aaa",
      marginTop: "0.3rem",
    }}
  >
    Designed & Developed by <strong>Tanushree Mohanty</strong>
  </Typography>
</Box>

    </Box>
  );
};

export default LandingPage;
