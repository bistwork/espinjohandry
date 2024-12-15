const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
// Serve static files
app.use(express.static('public'));
// API endpoints
app.get('/api/hello', (req, res) => {
res.json({ message: 'Hello from AWS Amplify!' });
});
// Handle all routes for SPA
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});