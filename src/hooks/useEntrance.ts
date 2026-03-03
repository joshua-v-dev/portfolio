import { useEffect, useRef } from "react";

const EASING = "cubic-bezier(0.16, 1, 0.3, 1)";

interface EntranceOptions {
  delay?: number;
  duration?: number;
  scale?: number;
}

export function useEntrance<T extends HTMLElement>({
  delay = 0,
  duration = 700,
  scale = 0.95,
}: EntranceOptions = {}): React.RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    el.style.opacity = "0";

    const anim = el.animate(
      [
        { opacity: 0, transform: `scale(${scale})` },
        { opacity: 1, transform: "scale(1)" },
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

    return () => anim.cancel();
  }, [delay, duration, scale]);

  return ref;
}
