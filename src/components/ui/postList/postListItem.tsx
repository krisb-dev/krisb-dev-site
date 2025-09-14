import { Post } from "@/types/posts";
import { formatDate } from "@/lib/formatDate";
import { Calendar1Icon } from "lucide-react";
import Link from "next/link";

interface PostListItemProps {
  post: Post;
}

const PostListItem = ({ post }: PostListItemProps) => {
  return (
    <article className=" bg-gray-800 rounded-xl">
      <header className="flex items-center gap-6 p-6">
        <h3 className="flex-1 font-inter font-bold text-3xl ">{post.title}</h3>
        <span className="inline-flex  px-2.5 py-1 text-xs text-white font-bold bg-orange-400">
          Category
        </span>
      </header>
      <div className="px-6">
        <p className="dark:text-gray-400">{post.excerpt}</p>
      </div>
      <footer className="flex items-center mt-6 pl-6">
        <span className="inline-flex items-center justify-center w-8 h-8 mr-2">
          <Calendar1Icon className="stroke-green-500 size-4" />
        </span>
        <span className="text-sm text-gray-500">
          {post.createdAt ? formatDate(post.updatedAt) : ""}
        </span>
        <Link
          href={`/articles/${post.slug}`}
          className="flex items-center gap-1 ml-auto px-6 group text-gray-400"
        >
          <span className="inline-flex p-4 font-black duration-300">
            Read more
          </span>
        </Link>
      </footer>
    </article>
  );
};

export { PostListItem };
