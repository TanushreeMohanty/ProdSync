import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

function Home() {
  const handleLogout = async () => {
    await signOut(auth);
    alert('Logged out!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome to ProdigyHub 🔥</h2>
      <p>This is your home/dashboard page.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
