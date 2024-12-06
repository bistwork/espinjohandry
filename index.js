const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static('public'));

// API endpoints
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from AWS Amplify!' });
});

// Manejar todas las rutas para SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
