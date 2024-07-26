import { useState, useEffect, useCallback } from "react";

import Spotify from "../../utils/Spotify.js";
import styles from "./App.module.css";
import ConnectToSpotify from "../ConnectToSpotify/ConnectToSpotify";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const connectToSpotify = () => {
    Spotify.getAccessToken();
  };

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

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
        <SearchResults searchResults={searchResults} />
      </main>
    </>
  );
}

export default App;
