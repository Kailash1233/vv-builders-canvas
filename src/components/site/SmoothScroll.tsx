import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href")!.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: 0 });
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (target?.isContentEditable) return;

      const viewport = window.innerHeight;
      const map: Record<string, number> = {
        ArrowDown: 120,
        ArrowUp: -120,
        PageDown: viewport * 0.9,
        PageUp: -viewport * 0.9,
        " ": viewport * 0.9,
        Spacebar: viewport * 0.9,
      };

      if (e.key === "Home" || e.key === "End") {
        e.preventDefault();
        lenis.scrollTo(e.key === "Home" ? 0 : document.body.scrollHeight);
        return;
      }

      let delta = map[e.key];
      if (delta === undefined) return;
      if (e.key === " " && e.shiftKey) delta = -delta;
      e.preventDefault();
      lenis.scrollTo(lenis.scroll + delta);
    };

    document.addEventListener("click", onAnchorClick);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
