import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

function App() {
  return (
    <>
      <header>
        <h1>
          Ja<span>mmm</span>ing
        </h1>
      </header>
      <main>
        <SearchBar className={styles.searchBar} />
        <SearchResults />
      </main>
    </>
  );
}

export default App;
