import { IconCss } from "../icons/iconCss";
import { IconExpress } from "../icons/iconExpress";
import { IconHtml } from "../icons/iconHtml";
import { IconJs } from "../icons/iconJs";
import { IconNode } from "../icons/iconNode";
import { IconPhp } from "../icons/iconPhp";
import { IconReact } from "../icons/iconReact";
import { IconTs } from "../icons/iconTs";
const tech = [
  {
    title: "HTML",
    icon: IconHtml,
  },
  {
    title: "CSS",
    icon: IconCss,
  },
  {
    title: "JavaScript",
    icon: IconJs,
  },
  {
    title: "TypeScript",
    icon: IconTs,
  },
  {
    title: "PHP",
    icon: IconPhp,
  },
  {
    title: "React",
    icon: IconReact,
  },
  {
    title: "Node",
    icon: IconNode,
  },
  {
    title: "Express",
    icon: IconExpress,
  },
];

const TechStackBlock = ({ block }) => {
  console.log(block);
  return (
    <section className="py-20">
      <div className="w-full max-w-4xl mx-auto">
        <header className="flex items-center gap-10">
          <div className="flex-1">
            <h2 className="font-inter font-bold text-gray-100 text-xl">
              {block.title}
            </h2>
            <p className="mt-2 text-gray-300">{block.summary}</p>
          </div>
        </header>
        <div className="grid lg:grid-cols-4 gap-6 mt-6">
          {tech.map((item: any, index: number) => (
            <div
              className="flex flex-col items-center justify-center h-40 bg-gray-800 rounded-md"
              key={index}
            >
              {item.icon && <item.icon className="size-10 mb-4" />}
              <span className="text-zinc-300">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { TechStackBlock };
