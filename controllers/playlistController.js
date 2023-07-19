app.post('/songs', (req, res) => {
  const newSong = req.body;
  playlist.push(newSong);
  res.status(201).json("success add song to playlist");
});

app.get('/songs/:id/play', (req, res) => {
  const id = parseInt(req.params.id);
  const song = playlist.find((s) => s.id === id);
  if (!song) {
    res.status(404).json({ error: 'song not found' });
  } else {
    res.json(song.url);
  }
});

app.get('/songs', (req, res) => {
  res.json(playlist);
});