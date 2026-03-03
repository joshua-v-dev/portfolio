import { useEffect, useRef } from "react";

const EASING = "cubic-bezier(0.16, 1, 0.3, 1)";

interface ScrollRevealOptions {
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
}

export function useScrollReveal<T extends HTMLElement>({
  direction = "up",
  delay = 0,
  duration = 600,
  distance = 30,
  threshold = 0.15,
}: ScrollRevealOptions = {}): React.RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    // Set initial hidden state
    el.style.opacity = "0";
    const translate =
      direction === "up"
        ? `translateY(${distance}px)`
        : direction === "down"
          ? `translateY(-${distance}px)`
          : direction === "left"
            ? `translateX(${distance}px)`
            : `translateX(-${distance}px)`;
    el.style.transform = translate;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        const anim = el.animate(
          [
            { opacity: 0, transform: translate },
            { opacity: 1, transform: "translate(0, 0)" },
          ],
          {
            duration,
            delay,
            easing: EASING,
            fill: "forwards",
          },
        );

        anim.onfinish = () => {
          el.style.opacity = "1";
          el.style.transform = "";
          anim.cancel();
        };

        observer.unobserve(el);
      },
      { threshold },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [direction, delay, duration, distance, threshold]);

  return ref;
}
