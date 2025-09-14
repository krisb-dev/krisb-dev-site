import { Circle } from "lucide-react";
import { codeToHtml } from "shiki";

const CodeBlock = async ({ block }) => {
  const codeOutput = await codeToHtml(block.fields.code, {
    lang: "ts",
    theme: "catppuccin-macchiato",
  });
  return (
    <section className="py-20">
      <div className="rounded-xl p-6 overflow-x-auto text-sm leading-relaxed bg-[#24273a]">
        <div className="flex items-center mb-4">
          <div className="flex gap-1">
            <Circle className="size-4 fill-red-500 stroke-red-500" />
            <Circle className="size-4 fill-amber-500 stroke-amber-500" />
            <Circle className="size-4 fill-lime-500 stroke-lime-500" />
          </div>
          <div className="ml-auto">
            <span className="text-gray-400">TypeScript</span>
          </div>
        </div>
        <pre className="shiki ">
          <code dangerouslySetInnerHTML={{ __html: codeOutput }} />
        </pre>
      </div>
    </section>
  );
};

export { CodeBlock };
