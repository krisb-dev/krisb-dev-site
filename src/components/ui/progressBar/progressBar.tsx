import styles from "./progressBar.module.css";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className={styles.progressTrack}>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export { ProgressBar };
