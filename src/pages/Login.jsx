import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase/config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

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
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <p>Don't have an account? <a href="/signup">Signup</a></p>
    </div>
  );
}

export default Login;
