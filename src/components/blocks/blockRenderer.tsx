import { ReactNode } from "react";
import HeroBlock from "./heroBlock";
// import { ContentBlock } from "./types";
import ProjectsListBlock from "./projectsList/projectsListBlock";
import PostsListBlock from "./postsListBlock";
import { PageTitleBlock } from "./pageTitle/pageTitleBlock";
import { WysiwygBlock } from "./wysiwygBlock";
import { TechStackBlock } from "./techStackBlock";
import { ParagraphBlock } from "./paragraph/paragraphBlock";
import { CodeBlock } from "./code/clodeBlock";
import { StravaBlock } from "./strava/stravaBlock";

interface BlockRendererProps {
  block: any;
}

const BlockRenderer = ({ block }: BlockRendererProps) => {
  // console.log("BlockRenderer", block);

  let blockType: string;

  if (block.fields && block.fields.blockType) {
    blockType = block.fields.blockType;
  } else if (block.blockType) {
    blockType = block.blockType;
  } else {
    console.warn("No blockType found in block: ", block);
    return null;
  }

  const renderBlock = (): ReactNode => {
    switch (blockType) {
      case "HERO":
        return <HeroBlock block={block} />;
      case "pageTitle":
        return <PageTitleBlock block={block} />;
      case "projectsList":
        return <ProjectsListBlock block={block} />;
      case "postsList":
        return <PostsListBlock block={block} />;
      case "wysiwyg":
        return <WysiwygBlock block={block} />;
      case "techStack":
        return <TechStackBlock block={block} />;
      case "code":
        return <CodeBlock block={block} />;
      case "strava":
        return <StravaBlock block={block} />;
      default:
        return null;
    }
  };
  return <>{renderBlock()}</>;
};

export default BlockRenderer;
