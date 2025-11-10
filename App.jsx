import React from 'react';
import { Link } from 'react-router-dom';

const App = ({ children }) => (
  <div style={{ fontFamily: 'Arial', padding: '20px' }}>
    <header style={{ marginBottom: '20px', borderBottom: '1px solid #ddd' }}>
      <h2>MEE SAKSHI — E-PAPER CMS</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer style={{ marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
      © {new Date().getFullYear()} MEE SAKSHI
    </footer>
  </div>
);

export default App;
