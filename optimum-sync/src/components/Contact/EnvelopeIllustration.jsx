export default function EnvelopeIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[240px]">
      <style>{`
        @keyframes envelope-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes sparkle-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .envelope-float { animation: envelope-float 3.5s ease-in-out infinite; }
        .sparkle-a { animation: sparkle-pulse 2s ease-in-out infinite; }
        .sparkle-b { animation: sparkle-pulse 2s ease-in-out infinite 0.6s; }
        .sparkle-c { animation: sparkle-pulse 2s ease-in-out infinite 1.2s; }
      `}</style>

      <svg viewBox="0 0 260 220" className="h-auto w-full envelope-float">
        {/* dashed flight path for the paper airplane */}
        <path
          d="M 40 60 C 90 20, 150 10, 200 30"
          className="stroke-charcoal"
          strokeWidth="2"
          strokeDasharray="4 6"
          fill="none"
          opacity="0.35"
        />

        {/* paper airplane */}
        <g transform="translate(195,20) rotate(15)">
          <path
            d="M 0 0 L 26 8 L 0 16 L 6 8 Z"
            className="fill-charcoal"
            opacity="0.85"
          />
        </g>

        {/* sparkles */}
        <circle cx="55" cy="30" r="3" className="fill-charcoal sparkle-a" />
        <circle cx="230" cy="70" r="2.5" className="fill-charcoal sparkle-b" />
        <circle cx="20" cy="110" r="2" className="fill-charcoal sparkle-c" />

        {/* envelope body */}
        <rect x="20" y="90" width="220" height="120" rx="14" className="fill-pale-blue" />
        <rect
          x="20"
          y="90"
          width="220"
          height="120"
          rx="14"
          className="stroke-charcoal"
          strokeWidth="2.5"
          fill="none"
          opacity="0.35"
        />

        {/* letter peeking out of the top */}
        <g>
          <rect x="55" y="55" width="150" height="80" rx="8" className="fill-white" opacity="0.95" />
          <rect
            x="55"
            y="55"
            width="150"
            height="80"
            rx="8"
            className="stroke-charcoal"
            strokeWidth="1.5"
            fill="none"
            opacity="0.25"
          />
          <line x1="72" y1="78" x2="188" y2="78" className="stroke-charcoal" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
          <line x1="72" y1="94" x2="165" y2="94" className="stroke-charcoal" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
          <line x1="72" y1="110" x2="140" y2="110" className="stroke-charcoal" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
        </g>

        {/* envelope flap, open */}
        <path
          d="M 20 92 L 130 150 L 240 92"
          className="stroke-charcoal"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />

        {/* sent checkmark badge */}
        <circle cx="205" cy="185" r="20" className="fill-charcoal" opacity="0.9" />
        <path
          d="M 196 185 L 202 191 L 215 176"
          className="stroke-white"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
