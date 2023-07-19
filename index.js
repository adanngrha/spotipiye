const express = require('express');
const app = express();
const playlistModel = require('./models/playlist');

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});