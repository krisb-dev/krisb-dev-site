import Link from "next/link";
import { ProjectsListContent } from "./types";
import { ArrowRight, Calendar1Icon } from "lucide-react";
import { formatDate } from "@/lib/formatDate";

interface PostsListBlockProps {
  block: {
    id: string;
    type: string;
    content: ProjectsListContent;
  };
}

interface PostsResponse {
  data: Post[];
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

  // console.log(postsData.docs);

  return (
    <section className="py-20">
      <div className="w-full max-w-4xl mx-auto">
        <header className="flex items-center gap-10">
          <div className="flex-1">
            <h2 className="font-inter font-bold text-4xl font-black">
              {block.title}
            </h2>
            <p className="mt-2">{block.summary}</p>
          </div>
          <Link
            href="/articles"
            className="flex items-center gap-1 text-gray-200 group"
          >
            View All
            <ArrowRight className="w-4 stroke-green-500 group-hover:translate-x-1 duration-300" />
          </Link>
        </header>
        <div className="flex flex-col gap-6 mt-10">
          {postsData.docs.map((post: Post) => (
            <article
              key={post.id}
              className="dark:bg-gray-800 rounded-xl duration-300 overflow-hidden"
            >
              <header className="flex items-center gap-6 p-6">
                <h3 className="flex-1 font-inter font-bold text-3xl">
                  {post.title}
                </h3>
                <span className="inline-flex  px-2.5 py-1 text-xs text-white font-bold bg-orange-400 rounded-md">
                  Category
                </span>
              </header>
              <div className="px-6">
                <p className="dark:text-zinc-300">{post.excerpt}</p>
              </div>
              <footer className="flex items-center mt-6 pl-6">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-2">
                  <Calendar1Icon className="stroke-green-500 size-4" />
                </span>
                <span className="text-sm text-gray-300">
                  {formatDate(post.createdAt)}
                </span>
                <Link
                  href={`/articles/${post.slug}`}
                  className="flex items-center gap-1 ml-auto px-6 group  duration-300"
                >
                  <span className="inline-flex p-4 font-black duration-300">
                    Read more
                  </span>

                  {/* <ArrowRight className="w-4 stroke-green-500 group-hover:translate-x-1 duration-300" /> */}
                </Link>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsListBlock;
