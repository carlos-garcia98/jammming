import styles from "./App.module.css";
import ConnectToSpotify from "../ConnectToSpotify/ConnectToSpotify";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>
          Ja<span>mmm</span>ing
        </h1>
        <ConnectToSpotify />
      </header>
      <main>
        <SearchBar />
        <SearchResults />
      </main>
    </>
  );
}

export default App;
