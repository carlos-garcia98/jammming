import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ searchResults }) {
  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.resultsTitle}>Search Results</h2>
      <div>
        <Tracklist tracks={searchResults} />
      </div>
    </div>
  );
}

export default SearchResults;
