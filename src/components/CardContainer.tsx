import clsx from "clsx";
import { type ForwardedRef, forwardRef, type ReactNode } from "react";

const OuterContainer = forwardRef<
  HTMLDivElement,
  { className?: string; children?: ReactNode }
>(function OuterContainer({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
      <div className="max-w-7xl mx-auto lg:px-8">{children}</div>
    </div>
  );
});

const InnerContainer = forwardRef<
  HTMLDivElement,
  { className?: string; children?: ReactNode }
>(function InnerContainer({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

export const Container = forwardRef(function Container(
  {
    className,
    children,
    ...props
  }: { children?: ReactNode; className?: string },
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

Container.displayName = "Container";
export const Outer = OuterContainer;
export const Inner = InnerContainer;
