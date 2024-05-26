import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState("");
  const [singerImage, setSingerImage] = useState("placeholder-singer.jpg");
  const [albumCover, setAlbumCover] = useState("placeholder-album.jpg");

  function searchLyrics() {
    if (artist === "" || song === "") {
      return;
    }
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then((response) => {
        setLyrics(response.data.lyrics);
        setError("");
        setSingerImage(`https://api.example.com/singer/${artist}`); // Replace with actual API endpoint or logic
        setAlbumCover(`https://api.example.com/album/${song}`); // Replace with actual API endpoint or logic
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError("Song not available");
          setLyrics("");
        }
        setSingerImage("placeholder-singer.jpg");
        setAlbumCover("placeholder-album.jpg");
      });
  }

  return (
    <div className="App">
      <h1>Lyrics Finder 🎵</h1>
      <input className="inp" type="text"
        placeholder='Artist name'
        onChange={(e) => { setArtist(e.target.value) }} />
      <input className="inp" type="text"
        placeholder='Song name'
        onChange={(e) => { setSong(e.target.value) }} />
      <button className="btn"
        onClick={() => searchLyrics()}>
        🔍 Search
      </button>
      {error && <div className="error">{error}</div>}
      <hr />
      <div className="lyrics-container">
        <img src={singerImage} alt="Singer" className="image singer" />
        <pre className="lyrics">{lyrics}</pre>
        <img src={albumCover} alt="Album Cover" className="image album" />
      </div>
    </div>
  );
}

export default App;
