import { clsx } from "clsx";
import type React from "react";
// import Link from "next/link";
import type { ComponentType, HTMLAttributes, JSX } from "react";

// import type {SVGProps} from "react";

// const ChevronRightIcon = (
//   props: JSX.IntrinsicAttributes&SVGProps<SVGSVGElement>
// ) => {
//   return (
//     <svg
//       width={20}
//       height={20}
//       viewBox="0 0 20 20"
//       fill="currentColor"
//       {...props}
//     >
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M7.293 4.293a1 1 0 011.414 0L13 8.586V9a1 1 0 01-2 0V7.414l-4.293 4.293a1 1 0 01-1.414-1.414l4.293-4.293a1 1 0 010-1.414z"
//       />
//     </svg>
//   );
// }

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: ComponentType<string> | string;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
};

export function Card({
  as: Component = "div",
  className,
  children,
  ...props
}: CardProps) {
  const ComponentType = Component as ComponentType<any | string>;
  return (
    <ComponentType
      className={clsx(className, "group relative flex flex-col items-start")}
      {...props}
    >
      {children}
    </ComponentType>
  );
}

Card.Link = function CardLink(_props: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      {/* <Link {...props}>
        {props.children}
     
      
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link> */}
    </>
  );
};

Card.Title = function CardTitle({
  as: Component = "h2",
  // href,
  children,
}: {
  as?: ComponentType<string> | string;
  href?: string;
  children: React.ReactNode;
}) {
  const ComponentType = Component as string | ComponentType<any>;
  return (
    <ComponentType className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {/* {href ? <Card.Link href={href}>{children}</Card.Link> : children} */}
      {children}
    </ComponentType>
  );
};

Card.Description = function CardDescription(_props: {
  children: React.ReactNode;
}) {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {/* {children} */}
    </p>
  );
};

Card.Cta = function CardCta(/*{ children }: { children: React.ReactNode }*/) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {/* {children} */}
      {/* <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" /> */}
    </div>
  );
};

Card.Eyebrow = function CardEyebrow({
  as: Component = "p",
  decorate = false,
  className,
  children,
  ...props
}: {
  as?: ComponentType<string> | string | any;
  decorate?: boolean;
  className?: string;
  children: React.ReactNode;
} & JSX.IntrinsicAttributes) {
  return (
    <Component
      className={clsx(
        className,
        "relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",
        decorate && "pl-3.5",
      )}
      {...props}
    >
      {children}
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
    </Component>
  );
};
