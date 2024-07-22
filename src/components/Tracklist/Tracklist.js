import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist() {
  return (
    <div className={styles.tracklistContainer}>
      <Track />
    </div>
  );
}

export default Tracklist;
