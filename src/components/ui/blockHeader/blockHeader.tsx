import { Container } from "@/components/global/layout/container/container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import styles from "./blockHeader.module.css";
import { ReadMore } from "../readMore/readMore";

interface BlockHeaderProps {
  title: string;
  summary: string;
  link?: string;
  linkText?: string;
}

console.log("blockheader");

const BlockHeader = ({ title, summary, link, linkText }: BlockHeaderProps) => {
  return (
    <header className={styles.blockHeader}>
      <Container>
        <div>
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
        {link && linkText && <ReadMore href={link} label={linkText} />}
      </Container>
    </header>
  );
};

export { BlockHeader };
