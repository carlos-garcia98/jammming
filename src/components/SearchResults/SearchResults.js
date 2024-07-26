import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.resultsTitle}>Search Results</h2>
      <div>
        <Tracklist tracks={searchResults} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default SearchResults;
