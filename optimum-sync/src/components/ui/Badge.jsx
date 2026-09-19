const tones = {
  blue: "bg-pale-blue text-charcoal",
  mint: "bg-teal-mint text-charcoal",
  lavender: "bg-lavender/60 text-charcoal",
  gray: "bg-soft-gray text-text-secondary",
  success: "bg-success/10 text-emerald-700",
  warning: "bg-warning/20 text-amber-700",
  error: "bg-error/15 text-red-700",
  info: "bg-info/15 text-violet-700",
};

// <Badge>New</Badge>  |  <Badge tone="success">Live</Badge>  (blog categories, tags, statuses)
export default function Badge({ tone = "blue", className = "", children }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
