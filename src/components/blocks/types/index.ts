import { ParagraphNode } from "@/types/blocks";

export interface BlockBase {
  id: string;
  type: string;
}

export interface HeroContent {
  heroTitle: string;
  heroContent: string;
}

export interface ProjectsListContent {
  blockTitle: string;
  blockSummary: string;
}

export interface PostsListContent {
  blockTitle: string;
  blockSummary: string;
}

// export type ContentBlock =
//   | (BlockBase & { type: "HERO"; content: HeroContent })
//   | (BlockBase & { type: "projects-list"; content: ProjectsListContent })
//   | (BlockBase & { type: "posts-list"; content: PostsListContent })
//   | (BlockBase & { type: "paragraph"; content: ParagraphNode })
//   | (BlockBase & { type: "code"; content: any });
// export type ContentBlocks = ContentBlock[];
