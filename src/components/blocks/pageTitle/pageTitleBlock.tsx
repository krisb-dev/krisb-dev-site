import { Container } from "@/components/global/layout/container/container";
import { Button } from "@/components/ui/button/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import styles from "./pageTitle.module.css";
import { ReadMore } from "@/components/ui/readMore/readMore";
import { Chip } from "@/components/ui/chip/chip";

interface PageTitleBlockProps {
  block: {
    image: {
      url: string;
    };
    title: string;
    subtitle: string;
    link?: {
      slug: string;
      title: string;
    };
    linkText: string;
  };
}

const PageTitleBlock = ({ block }: PageTitleBlockProps) => {
  return (
    <section className={styles.pageTitle}>
      <Container className="flex-col">
        <Chip label="Current location - Tewkesbury, UK" variant="tertiary" />
        <h1 className="">{block.title}</h1>
        <p className="">{block.subtitle}</p>
        {block.link && (
          <ReadMore href={block.link.slug} label={block.linkText} />
        )}
        {block.image && (
          <figure className="">
            <Image
              src={`http://localhost:3000${block.image.url}`}
              alt={block.title}
              className=""
              width={600}
              height={600}
            />
          </figure>
        )}
      </Container>
    </section>
  );
};

export { PageTitleBlock };
