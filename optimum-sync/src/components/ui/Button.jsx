import { Link } from "react-router-dom";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-teal-mint text-charcoal hover:bg-mint",
  outline: "border border-brand text-brand bg-white hover:bg-pale-blue",
  dark: "bg-charcoal text-white hover:bg-ink",
};

// <Button>Save</Button>  |  <Button to="/contact" variant="outline">Contact</Button>
// Pass `href` for external links.
export default function Button({ variant = "primary", to, href, className = "", children, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";
  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
