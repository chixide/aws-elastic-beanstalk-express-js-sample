const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Yaaaaah Baby, Im like yeah shes fine, Wondering when she\'ll be mine'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
