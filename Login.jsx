import React from 'react';

export default function Login() {
  return (
    <div>
      <h3>Login Page</h3>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <input placeholder="Email" type="email" style={{ margin: '6px 0', padding: '8px' }} />
        <input placeholder="Password" type="password" style={{ margin: '6px 0', padding: '8px' }} />
        <button style={{ background: '#0078ff', color: 'white', padding: '8px', border: 'none' }}>Login</button>
      </form>
    </div>
  );
}
