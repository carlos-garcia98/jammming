import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";

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
      </main>
    </>
  );
}

export default App;
