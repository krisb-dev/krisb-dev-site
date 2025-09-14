export interface TextNode {
  mode: string;
  text: string;
  type: "text";
  style: string;
  detail: number;
  format: number;
  version: number;
}

export interface ParagraphNode {
  type: "paragraph";
  format: string;
  indent: number;
  version: number;
  children: TextNode[];
  direction: "ltr" | "rtl";
  textStyle: string;
  textFormat: number;
}

export interface HeadingNode {
  type: "heading";
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  format: string;
  indent: number;
  version: number;
  children: TextNode[];
  direction: "ltr" | "rtl";
}

export interface CustomBlock {
  type: "block";
  fields: {
    id: string;
    blockType: string;
    blockName?: string;
    [key: string]: any;
  };
  format: string;
  version: number;
}

export type ContentNode = ParagraphNode | HeadingNode | CustomBlock;

export interface RichTextContent {
  root: {
    type: "root";
    format: string;
    indent: number;
    version: number;
    children: ContentNode[];
    direction: "ltr" | "rtl";
  };
}

export interface LayoutBlock {
  id: string;
  blockType: string;
  blockName?: string;
  [key: string]: any;
}
