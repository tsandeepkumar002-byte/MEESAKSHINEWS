const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Health route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'MEE SAKSHI backend working fine ✅' });
});

// Serve built frontend
const staticRoot = path.join(__dirname, 'frontend', 'dist');
app.use(express.static(staticRoot));
app.get('*', (req, res) => res.sendFile(path.join(staticRoot, 'index.html')));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
