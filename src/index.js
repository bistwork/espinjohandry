const express = require('express');
const app = express();
const port = 3000;

// Servir archivos estáticos
app.use(express.static(__dirname + '/src/public'));

// Servir la página de inicio
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/public/index.html');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});