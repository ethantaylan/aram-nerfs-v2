export default function Logo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="100" cy="100" r="90" fill="white" />
      <circle cx="100" cy="100" r="85" fill="black" stroke="white" strokeWidth="2" />

      {/* "M" Letter - bold and modern */}
      <path
        d="M 50 75 L 50 125 L 60 125 L 60 90 L 80 125 L 85 125 L 105 90 L 105 125 L 115 125 L 115 75 L 105 75 L 82.5 115 L 60 75 Z"
        fill="white"
      />

      {/* Hexagon accent on right side */}
      <path
        d="M 130 85 L 145 95 L 145 105 L 130 115 L 115 105 L 115 95 Z"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
      />

      {/* Inner hexagon detail */}
      <path
        d="M 130 92 L 138 97 L 138 103 L 130 108 L 122 103 L 122 97 Z"
        fill="white"
      />

      {/* Bottom accent lines */}
      <rect x="45" y="135" width="110" height="2" fill="white" />
      <rect x="65" y="142" width="70" height="1.5" fill="white" opacity="0.6" />

      {/* Top decorative dots */}
      <circle cx="70" cy="60" r="2.5" fill="white" opacity="0.8" />
      <circle cx="130" cy="60" r="2.5" fill="white" opacity="0.8" />
    </svg>
  );
}
