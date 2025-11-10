import React, { useState } from 'react';

export default function Home() {
  const [msg, setMsg] = useState('Click the button to check backend health');

  const checkHealth = async () => {
    try {
      const res = await fetch('/api/health');
      const json = await res.json();
      setMsg(JSON.stringify(json, null, 2));
    } catch (err) {
      setMsg('Failed to reach backend: ' + err.message);
    }
  };

  return (
    <div>
      <h3>Home Page</h3>
      <p>This is the main frontend served by the backend container.</p>
      <button onClick={checkHealth}>Check Backend</button>
      <pre style={{ background: '#f2f2f2', padding: '10px', borderRadius: '6px' }}>{msg}</pre>
    </div>
  );
}
