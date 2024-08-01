import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";
import { useCallback } from "react";

function Playlist({ playlistTracks, onRemove, onNameChange, onSave }) {
  const handleChange = useCallback(
    ({ target }) => {
      onNameChange(target.value);
    },
    [onNameChange]
  );

  return (
    <div className={styles.playlistContainer}>
      <input
        type="text"
        className={styles.playlistName}
        defaultValue="New Playlist"
        onChange={handleChange}
      />
      <div>
        <Tracklist
          tracks={playlistTracks}
          isRemoval={true}
          onRemove={onRemove}
        />
      </div>
      <button className={styles.saveToSpotifyButton} onClick={onSave}>
        Save to Spotify
      </button>
    </div>
  );
}

export default Playlist;
