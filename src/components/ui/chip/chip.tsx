import clsx from "clsx";
import styles from "./chip.module.css";

interface ChipProps {
  label: string;
  variant: "primary" | "secondary" | "tertiary";
  className?: string;
}

const Chip = ({ label, variant }: ChipProps) => {
  return (
    <span className={clsx(styles.chip, styles[variant])}>
      <span className={styles.chipDot}></span> {label}
    </span>
  );
};

export { Chip };
