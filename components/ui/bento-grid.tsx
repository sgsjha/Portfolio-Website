import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-start space-y-2 overflow-hidden",
        className
      )}
    >
      {/* Title aligned at the top center */}
      <div className="flex justify-center items-start w-full text-center">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg">
          {title}
        </div>
      </div>

      {/* Description */}
      <div
        className="mt-2 text-lg text-neutral-600 dark:text-neutral-300 group-hover/bento:translate-x-1 transition duration-200 flex justify-center"
        style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
      >
        {description}
      </div>
    </div>
  );
};