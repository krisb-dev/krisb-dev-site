import Link from "next/link";
import { ArrowRight, Calendar1Icon } from "lucide-react";
import { formatDate } from "@/lib/formatDate";
import { Container } from "@/components/global/layout/container/container";
import { BlockHeader } from "@/components/ui/blockHeader/blockHeader";
import { PostList } from "@/components/ui/postList/postList";
import { Post } from "@/types/posts";

import styles from "./postsListBlock.module.css";

interface PostsListBlockProps {
  block: {
    id: string;
    type: string;
    title: string;
    summary: string;
  };
}

interface PostsResponse {
  docs: Post[];
}

async function fetchPostsData(): Promise<PostsResponse> {
  const res = await fetch("http://localhost:3000/api/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

const PostsListBlock = async ({ block }: PostsListBlockProps) => {
  const postsData = await fetchPostsData();

  console.log(postsData);

  return (
    <section className={styles.postsListBlock}>
      <BlockHeader
        title={block.title}
        summary={block.summary}
        link="/articles"
        linkText="Read posts"
      />
      <Container>
        <PostList posts={postsData.docs} />
      </Container>
    </section>
  );
};

export default PostsListBlock;
