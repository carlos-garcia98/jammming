import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist({ tracks }) {
  return (
    <div className={styles.tracklistContainer}>
      {tracks.map((track) => {
        return <Track track={track} key={track.id} />;
      })}
    </div>
  );
}

export default Tracklist;
