// Tiny inline icons so the Home page needs no icon dependency.
const make = (children) =>
  function Icon({ size = 20, ...props }) {
    return (
      <svg
        width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true" focusable="false" {...props}
      >
        {children}
      </svg>
    );
  };

export const ArrowRight = make(<path d="M5 12h14M13 6l6 6-6 6" />);
export const ArrowUpRight = make(<path d="M7 17 17 7M8 7h9v9" />);
export const ChevronLeft = make(<path d="m15 6-6 6 6 6" />);
export const ChevronRight = make(<path d="m9 6 6 6-6 6" />);
export const Building = make(<><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M10 21v-4h4v4" /></>);
export const Shield = make(<path d="m12 3 8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" />);
export const Briefcase = make(<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></>);
export const Heart = make(<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />);
