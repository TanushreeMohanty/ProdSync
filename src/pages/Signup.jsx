import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase/config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful!');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Signed up with Google!');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
        <br />
        <button type="submit">Signup</button>
      </form>
      <br />
      <button onClick={handleGoogleSignup}>Signup with Google</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Signup;
