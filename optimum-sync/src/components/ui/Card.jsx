export default function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-xl border border-light-gray bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${className}`}
    >
      {children}
    </div>
  );
}
