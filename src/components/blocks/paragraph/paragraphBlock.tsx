import { ParagraphNode } from "@/types/blocks";

interface BlockParagraphProps {
  block: ParagraphNode;
}

console.log("here");

const ParagraphBlock = ({ block }: BlockParagraphProps) => {
  return (
    <>
      {block.children.map((paragraph, i) => (
        <p key={i} className="mb-6 last-of-type:mb-0 text-red-500">
          {paragraph.text}
        </p>
      ))}
    </>
  );
};

export { ParagraphBlock };
