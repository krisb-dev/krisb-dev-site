import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroContent } from "./types";

interface HeroBlockProps {
  block: {
    id: string;
    type: string;
    content: HeroContent;
  };
}

const HeroBlock = ({ block }: HeroBlockProps) => {
  return (
    <section className="p-20 lg:py-52 bg-green-300">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="font-bold font-inter text-gray-100 text-6xl">
          {block.content.heroTitle}
        </h1>
        <p className="mt-8 text-zinc-300 text-3xl">
          {block.content.heroContent}
        </p>
      </div>
    </section>
  );
};

export default HeroBlock;
