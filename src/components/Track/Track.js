import { useCallback } from "react";
import styles from "./Track.module.css";

function Track({ track, isRemoval, onAdd, onRemove }) {
  const addTrack = useCallback(() => {
    onAdd(track);
  }, [onAdd, track]);

  const removeTrack = useCallback(() => {
    onRemove(track);
  }, [onRemove, track]);

  const renderAction = useCallback(() => {
    if (isRemoval) {
      return (
        <button className={styles.trackAction} onClick={removeTrack}>
          -
        </button>
      );
    } else {
      return (
        <button className={styles.trackAction} onClick={addTrack}>
          +
        </button>
      );
    }
  }, [isRemoval, addTrack, removeTrack]);
  return (
    <div className={styles.trackContainer}>
      <h3>{track.name}</h3>
      <p className={styles.trackInformation}>
        {track.artist} | {track.album}
      </p>
      {renderAction()}
    </div>
  );
}

export default Track;
