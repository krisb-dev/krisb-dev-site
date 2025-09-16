import { Post } from "@/types/posts";
import { PostListItem } from "./postListItem";

import styles from "./postList.module.css";

interface PostsListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostsListProps) => {
  return (
    <div className={styles.postList}>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <PostListItem key={post.id} post={post} />)}
    </div>
  );
};

export { PostList };
