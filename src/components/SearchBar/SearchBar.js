import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Type a song to search" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
