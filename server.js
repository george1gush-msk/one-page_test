const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(function (req, res, next) {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', function () {
  console.log('Server running on http://0.0.0.0:' + PORT);
});
