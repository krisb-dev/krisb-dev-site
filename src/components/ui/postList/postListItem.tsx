import { Post } from "@/types/posts";
import { formatDate } from "@/lib/formatDate";
import { Calendar1Icon } from "lucide-react";
import Link from "next/link";

import styles from "./postListItem.module.css";
import { Chip } from "../chip/chip";
import { ReadMore } from "../readMore/readMore";

interface PostListItemProps {
  post: Post;
}

const PostListItem = ({ post }: PostListItemProps) => {
  return (
    <article className={styles.postListItem}>
      <header>
        <div>
          <span className={styles.postListItemDate}>
            {post.createdAt ? formatDate(post.updatedAt) : ""}
          </span>
          <h3>{post.title}</h3>
        </div>
        <Chip variant="primary" label="Category name" />
      </header>
      <div>
        <p>{post.excerpt}</p>
      </div>
      <footer>
        <ReadMore href={`/articles/${post.slug}`} label="Read post" />
      </footer>
    </article>
  );
};

export { PostListItem };
