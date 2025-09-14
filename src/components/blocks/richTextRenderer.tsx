import React, { ReactNode } from "react";
import BlockRenderer from "./blockRenderer";
import { ParagraphBlock } from "./paragraph/paragraphBlock";
import { ContentNode, RichTextContent, TextNode } from "@/types/blocks";
import { Container } from "../global/layout/container/container";

interface RichTextRendererProps {
  content: RichTextContent;
}

const RichTextRenderer = ({ content }: RichTextRendererProps) => {
  const renderTextNode = (textNode: TextNode, index: number): ReactNode => {
    {
      let content: ReactNode = textNode.text;

      if (textNode.format & 1) {
        content = <strong key={index}>{content}</strong>;
      }

      if (textNode.format & 2) {
        content = <em key={index}>{content}</em>;
      }

      return <span key={index}>{content}</span>;
    }
  };

  const renderNode = (node: ContentNode, index: number): ReactNode => {
    switch (node.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-f leading-relaxed">
            {node.children.map((child, childIndex) =>
              renderTextNode(child, childIndex)
            )}
          </p>
        );
      case "heading":
        const HeadingTag = node.tag as keyof React.JSX.IntrinsicElements;
        const headingClasses = {
          h1: "text-4xl font-bold mb-6 mt-8",
          h2: "text-3xl font-semibold mb-4 mt-6",
          h3: "text-2xl font-semibold mb-3 mt-5",
          h4: "text-xl font-semibold mb-2 mt-4",
          h5: "text-lg font-semibold mb-2 mt-3",
          h6: "text-base font-semibold mb-2 mt-2",
        };

        return (
          <HeadingTag key={index} className={headingClasses[node.tag]}>
            {node.children.map((child, childIndex) =>
              renderTextNode(child, childIndex)
            )}
          </HeadingTag>
        );

      case "block":
        // Handle custom blocks
        return <BlockRenderer key={index} block={node} />;

      default:
        console.warn(`Unhandled node type: ${(node as any).type}`);
        return null;
    }
  };

  return (
    <Container>
      {content.root.children.map((node, index) => renderNode(node, index))}
    </Container>
  );
};

export { RichTextRenderer };
