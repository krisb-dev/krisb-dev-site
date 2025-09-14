import clsx from "clsx";
import Link from "next/link";

import styles from "./readMore.module.css";

interface ReadMoreProps {
  label: string;
  href: string;
  className?: string;
}

const ReadMore = ({ label, href, className }: ReadMoreProps) => {
  return (
    <Link href={href} className={clsx(styles.readMore, className)}>
      {label}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-move-right-icon lucide-move-right arrow"
        >
          <path d="M18 8L22 12L18 16" className={styles.arrowHead} />
          <path d="M2 12H22" className={styles.arrowLine}>
            <animate
              attributeName="d"
              values="M2 12H18;M2 12H20;M2 12H18"
              dur="0.3s"
              begin="indefinite"
              className={styles.extend}
            />
          </path>
        </svg>
      </span>
    </Link>
  );
};

export { ReadMore };
