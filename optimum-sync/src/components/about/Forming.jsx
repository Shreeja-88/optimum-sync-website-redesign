import { useInView } from "./useInView";

// A calm scroll effect: each block of text fades up slightly once, as it scrolls into view.
export default function Forming({ children }) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <span ref={ref} className={`os-fade${inView ? " is-in" : ""}`}>
      {children}
    </span>
  );
}
