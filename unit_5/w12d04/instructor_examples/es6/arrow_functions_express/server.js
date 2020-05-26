const express = require('express');
const app     = express();

const port = 3001;

app.get('/resources', (req, res) => {
  res.send('index route');
});

app.get('/resources/:id', (req, res) => {
  res.send('show route');
});

app.listen(port, () => console.log('running on port: ', port));


