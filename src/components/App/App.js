import { useState, useEffect, useCallback } from "react";

import Spotify from "../../utils/Spotify.js";
import styles from "./App.module.css";
import ConnectToSpotify from "../ConnectToSpotify/ConnectToSpotify";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const connectToSpotify = () => {
    Spotify.getAccessToken();
  };

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
        return;
      }
      setPlaylistTracks((prev) => [...prev, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prev) => {
      return prev.filter((savedTrack) => savedTrack.id !== track.id);
    });
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>
          Ja<span>mmm</span>ing
        </h1>
        <ConnectToSpotify connect={connectToSpotify} />
      </header>
      <main>
        <SearchBar search={search} />
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
        />
      </main>
    </>
  );
}

export default App;
