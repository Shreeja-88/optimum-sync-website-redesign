import { useState } from "react";

// <img> that quietly disappears if the file is missing or fails to load,
// so the parent's gradient background shows instead. Never breaks the page.
export default function Photo({ src, alt = "", className }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />;
}
