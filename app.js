const express = require('express');
const app = express();
const port = 8080;

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, leonardo!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});