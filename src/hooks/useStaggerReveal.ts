import { useEffect, useRef } from "react";

const EASING = "cubic-bezier(0.16, 1, 0.3, 1)";

interface StaggerRevealOptions {
  staggerDelay?: number;
  duration?: number;
  distance?: number;
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
}

export function useStaggerReveal<T extends HTMLElement>({
  staggerDelay = 100,
  duration = 600,
  distance = 30,
  direction = "up",
  threshold = 0.1,
}: StaggerRevealOptions = {}): React.RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const children = Array.from(container.children) as HTMLElement[];
    const translate =
      direction === "up"
        ? `translateY(${distance}px)`
        : direction === "down"
          ? `translateY(-${distance}px)`
          : direction === "left"
            ? `translateX(${distance}px)`
            : `translateX(-${distance}px)`;

    // Hide children initially
    for (const child of children) {
      child.style.opacity = "0";
      child.style.transform = translate;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        children.forEach((child, i) => {
          const anim = child.animate(
            [
              { opacity: 0, transform: translate },
              { opacity: 1, transform: "translate(0, 0)" },
            ],
            {
              duration,
              delay: i * staggerDelay,
              easing: EASING,
              fill: "forwards",
            },
          );

          anim.onfinish = () => {
            child.style.opacity = "1";
            child.style.transform = "";
            anim.cancel();
          };
        });

        observer.unobserve(container);
      },
      { threshold },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [staggerDelay, duration, distance, direction, threshold]);

  return ref;
}
