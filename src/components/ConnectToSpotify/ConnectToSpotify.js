import styles from "./ConnectToSpotify.module.css";

function ConnectToSpotify(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.connect();
  };
  return (
    <button className={styles.connectToSpotifyButton} onClick={handleClick}>
      Connect To Spotify
    </button>
  );
}

export default ConnectToSpotify;
