import styles from "./Track.module.css";

function Track() {
  return (
    <div className={styles.trackContainer}>
      <h3>Something Wonderful</h3>
      <p className={styles.trackInformation}>Keys N Krates | Cura</p>
      <button className={styles.trackAction}>+</button>
    </div>
  );
}

export default Track;
