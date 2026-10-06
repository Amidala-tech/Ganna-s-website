export default function SunArc({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 320"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 300C20 145.36 145.36 20 300 20s280 125.36 280 280"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M90 300C90 184.02 184.02 90 300 90s210 94.02 210 210"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M160 300c0-77.32 62.68-140 140-140s140 62.68 140 140"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}
