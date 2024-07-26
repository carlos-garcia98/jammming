import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist({ tracks, onAdd, isRemoval, onRemove }) {
  return (
    <div className={styles.tracklistContainer}>
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
}

export default Tracklist;
