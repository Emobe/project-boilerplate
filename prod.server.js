const path = require('path');
const express = require('express');

const port = process.env.PORT || 8000;
const app = express();

app.use(express.static('./'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (err) => {
  if (err) 
    return console.error(err);

  console.log(`Listening at http://localhost:${port}/`);
});
