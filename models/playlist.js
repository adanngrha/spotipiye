const { v4: uuidv4 } = require('uuid');

let playlist = [
  { id: "1", 
    title: "Lemon Tree", 
    artist: "Fools Garden", 
    url: "https://p.scdn.co/mp3-preview/0ce51df079155a323b91642b9f7a19bdebfc6bc1?cid=0b297fa8a249464ba34f5861d4140e58",
    played: 10,
  },
  { 
    id: "2", 
    title: "I Love You 3000", 
    artist: "Stephanie Poetri", 
    url: "https://p.scdn.co/mp3-preview/0ce51df079155a323b91642b9f7a19bdebfc6bc1?cid=0b297fa8a249464ba34f5861d4140e58",
    played: 4,
  },
];

const getAllSongs = () => {
  return playlist.sort((a, b) => b.played - a.played);
}

const addSong = (title, artist, url) => {
  const song = {
    id: uuidv4(),
    title,
    artist,
    url,
    played: 0,
  };
  playlist.push(song);
  return song;
}

const playSong = (songId) => {
  const song = playlist.find((s) => s.id === songId);
  if (!song) {
    return null;
  } else {
    song.played++;
    return song;
  }
}

module.exports = { getAllSongs, addSong, playSong }