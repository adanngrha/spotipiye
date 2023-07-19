const express = require('express');
const app = express();
const { getAllSongs, addSong, playSong } = require('./models/playlist');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// menambhahkan lagu
app.post('/songs', (req, res) => {
  const newSong = req.body;
  const songAdded = addSong(newSong.title, newSong.artist, newSong.url);
  res.status(201).json({"songAdded" : songAdded});
});

// memutar lagu
app.get('/songs/:id/play', (req, res) => {
  const id = parseInt(req.params.id);
  const song = playSong(id);
  if (!song) {
    res.status(404).json({ error: 'song not found' });
  } else {
    res.json(`playing ${song.title}`);
  }
});

// melihat semua lagu yang sudah terurut secara DESC berdasarkan jumlah diputar
app.get('/songs', (req, res) => {
  const songs = getAllSongs();
  res.json({ 'songs' : songs });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});