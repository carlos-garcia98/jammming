import { useState, useCallback } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ search }) {
  const [term, setTerm] = useState("");

  const handleChange = useCallback(({ target }) => {
    setTerm(target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      search(term);
    },
    [search, term]
  );
  return (
    <form>
      <input
        type="text"
        placeholder="Type a song to search"
        value={term}
        onChange={handleChange}
        className={styles.searchBarInput}
      />
      <button
        type="submit"
        className={styles.searchButton}
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
