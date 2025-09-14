import { Post } from "@/types/posts";
import { PostListItem } from "./postListItem";

interface PostsListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostsListProps) => {
  return (
    <div className="flex flex-col gap-6">
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <PostListItem key={post.id} post={post} />)}
    </div>
  );
};

export { PostList };
