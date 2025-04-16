import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase/config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Grid, Container } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Logged in with Google!');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ padding: '2rem' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#005F73' }}>
          Login
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#F1FAEE',
            },
            '& .MuiInputLabel-root': {
              color: '#005F73',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0A9396',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#94D2BD',
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2A9D8F',
            },
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#F1FAEE',
            },
            '& .MuiInputLabel-root': {
              color: '#005F73',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0A9396',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#94D2BD',
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2A9D8F',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            backgroundColor: '#005F73',
            '&:hover': {
              backgroundColor: '#0A9396',
            },
            padding: '0.8rem',
            fontWeight: 'bold',
            borderRadius: '25px',
            boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.2)',
          }}
        >
          Login
        </Button>
      </Box>

      <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
        <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
          Or login with
        </Typography>
        <Button
          onClick={handleGoogleLogin}
          variant="outlined"
          color="primary"
          fullWidth
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            borderColor: '#0A9396',
            color: '#005F73',
            '&:hover': {
              borderColor: '#2A9D8F',
              backgroundColor: '#F1FAEE',
            },
            padding: '0.8rem',
            fontWeight: 'bold',
          }}
        >
          <GoogleIcon sx={{ color: '#005F73' }} />
          Login with Google
        </Button>
      </Box>

      <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="body2">
          Don't have an account? <a href="/signup" style={{ color: '#005F73' }}>Signup</a>
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;
