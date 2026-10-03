import { useEffect } from "react";

// Eased mouse-wheel scrolling for the Home page only. Touch devices and
// reduced-motion users keep native scrolling. Scrollable inner areas
// (chat widget, textareas, the project slider) are left alone.
function insideScrollable(el) {
  for (let n = el; n && n !== document.body; n = n.parentElement) {
    const s = getComputedStyle(n);
    if (/(auto|scroll)/.test(s.overflowY) && n.scrollHeight > n.clientHeight + 1) return true;
  }
  return false;
}

export default function useSmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || matchMedia("(pointer: coarse)").matches) return;
    let target = window.scrollY, cur = target, raf = 0;
    const max = () => document.documentElement.scrollHeight - innerHeight;
    const go = (y) => window.scrollTo({ top: y, behavior: "instant" });
    const tick = () => {
      cur += (target - cur) * 0.1;
      if (Math.abs(target - cur) < 0.5) { cur = target; go(cur); raf = 0; return; }
      go(cur); raf = requestAnimationFrame(tick);
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
    const onWheel = (e) => {
      if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY) || insideScrollable(e.target)) return;
      e.preventDefault();
      target = Math.max(0, Math.min(max(), target + e.deltaY));
      kick();
    };
    const onScroll = () => { if (!raf) target = cur = window.scrollY; };
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      const id = a?.getAttribute("href");
      if (!id || id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      target = Math.max(0, Math.min(max(), el.getBoundingClientRect().top + window.scrollY - 80));
      kick();
    };
    addEventListener("wheel", onWheel, { passive: false });
    addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      removeEventListener("wheel", onWheel);
      removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
    };
  }, []);
}
