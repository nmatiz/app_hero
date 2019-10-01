const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.get('/', function(req, res) {
//obtiene los encabezados de la peticion html, para este caso los datos del navegador
  res.send(req.header('User-Agent'))
});

app.listen(PORT, () => console.log('Listening on port 3000!'));