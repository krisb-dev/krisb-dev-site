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
    </Link>
  );
};

export { ReadMore };
