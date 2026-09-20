// Simple on-brand illustrations for blog post covers.
// Each is a plain inline SVG so there's no dependency on external images.

export function ScalableSystemIllustration() {
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full">
      <rect width="400" height="225" className="fill-pale-blue" />
      {/* connected nodes representing a scalable system */}
      <g className="stroke-charcoal" strokeWidth="2" fill="none" opacity="0.5">
        <line x1="200" y1="60" x2="110" y2="130" />
        <line x1="200" y1="60" x2="290" y2="130" />
        <line x1="200" y1="60" x2="200" y2="150" />
        <line x1="110" y1="130" x2="60" y2="180" />
        <line x1="110" y1="130" x2="150" y2="180" />
        <line x1="290" y1="130" x2="250" y2="180" />
        <line x1="290" y1="130" x2="340" y2="180" />
      </g>
      <g className="fill-charcoal">
        <circle cx="200" cy="60" r="14" />
        <circle cx="110" cy="130" r="11" opacity="0.85" />
        <circle cx="290" cy="130" r="11" opacity="0.85" />
        <circle cx="200" cy="150" r="9" opacity="0.7" />
        <circle cx="60" cy="180" r="8" opacity="0.6" />
        <circle cx="150" cy="180" r="8" opacity="0.6" />
        <circle cx="250" cy="180" r="8" opacity="0.6" />
        <circle cx="340" cy="180" r="8" opacity="0.6" />
      </g>
    </svg>
  );
}

export function ClientRolloutIllustration() {
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full">
      <rect width="400" height="225" className="fill-pale-mint" />
      {/* checklist representing rollout milestones */}
      <g transform="translate(110,45)">
        <rect x="0" y="0" width="180" height="135" rx="10" className="fill-white" opacity="0.85" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(20, ${24 + i * 28})`}>
            <circle
              r="8"
              cx="8"
              cy="0"
              className={i < 3 ? "fill-charcoal" : "fill-none stroke-charcoal"}
              strokeWidth="2"
              opacity={i < 3 ? 0.8 : 0.4}
            />
            {i < 3 && (
              <path
                d="M4 0 L7 3 L13 -4"
                className="stroke-white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
            <rect x="26" y="-4" width="120" height="8" rx="4" className="fill-charcoal" opacity={i < 3 ? 0.35 : 0.2} />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function SyncIllustration() {
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full">
      <rect width="400" height="225" className="fill-pale-blue" />
      {/* two synced circular arrows */}
      <g transform="translate(200,112)" className="stroke-charcoal" strokeWidth="6" fill="none" strokeLinecap="round">
        <path d="M -55 0 A 55 55 0 1 1 -38 38" opacity="0.8" />
        <path d="M 55 0 A 55 55 0 1 1 38 -38" opacity="0.5" />
      </g>
      <g className="fill-charcoal">
        <polygon points="-95,112 -80,102 -80,122" transform="translate(200,0)" opacity="0.8" />
        <polygon points="95,112 80,122 80,102" transform="translate(200,0)" opacity="0.5" />
      </g>
    </svg>
  );
}
