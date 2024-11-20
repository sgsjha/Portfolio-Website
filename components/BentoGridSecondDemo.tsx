import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Advanced",
    description: (
      <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Python</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>Java</li>
        <li>React JS</li>
        <li>Firebase</li>
        <li>Swift</li>
        <li>React</li>
        <li>XCode</li>
        <li>SQL</li>
        <li>C/C++</li>
        <li>Swift UI</li>
        <li>Git</li>
        <li>Git Hub</li>
      </ul>
    ),
    header: <Skeleton />,
    className: "md:col-span-1 row-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Intermediate",
    description: (
      <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
        <li>Node JS</li>
        <li>Next JS</li>

        <li>Framer-Motion</li>
        <li>Figma</li>
        <li>UI/UX</li>
        <li>Bootstrap</li>
        <li>Figma</li>
      </ul>
    ),
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Exposure",
    description: (
      <ul className="list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
        <li>Kotlin</li>
        <li>Android SDK</li>
        <li>C#</li>
        <li>Mongo DB</li>
        <li>Bootstrap</li>
        <li>Cyber Security</li>
        <li>Autonomous Mobile Robotics</li>
      </ul>
    ),
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description: "sdf",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
