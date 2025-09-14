import { ReactNode } from "react";
import { RichTextRenderer } from "./richTextRenderer";
import BlockRenderer from "./blockRenderer";

interface LayoutRendererProps {
  layout: Array<{
    id: string;
    blockType: string;
    [key: string]: any;
  }>;
}

const LayoutRenderer = ({ layout }: LayoutRendererProps) => {
  const renderLayoutBlock = (block: any, index: number): ReactNode => {
    // Rich Text Blocks
    if (block.blockType === "content" && block.columns) {
      return (
        <div key={block.id || index} className="">
          {block.columns.map((column: any, colIndex: number) => (
            <div
              key={column.id || colIndex}
              className={`column-${column.size}`}
            >
              {column.richText && (
                <RichTextRenderer content={column.richText} />
              )}
            </div>
          ))}
        </div>
      );
    }

    // Other blocks
    return <BlockRenderer key={block.id || index} block={block} />;
  };

  return (
    <div className="">
      {layout.map((block, index) => renderLayoutBlock(block, index))}
    </div>
  );
};

export { LayoutRenderer };
