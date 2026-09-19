export default function Logo({ dark = false, className = "" }) {
  const src = dark ? "/images/logo_white.webp" : "/images/optimum-sync-logo.png";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={src}
        alt="Optimum Sync"
        className="h-10 w-auto object-contain"
      />
    </span>
  );
}
