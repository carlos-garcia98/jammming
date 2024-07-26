import styles from "./Track.module.css";

function Track({ track, onAdd, onRemove }) {
  return (
    <div className={styles.trackContainer}>
      <h3>{track.name}</h3>
      <p className={styles.trackInformation}>
        {track.artist} | {track.album}
      </p>
      <button className={styles.trackAction}>+</button>
    </div>
  );
}

export default Track;
