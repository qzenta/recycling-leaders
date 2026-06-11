export default function ARLLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="All Recycling Leaders"
    >
      {/* Diamond mark */}
      <polygon
        points="18,4 30,20 18,36 6,20"
        fill="#2E7D32"
      />
      <polygon
        points="18,10 25,20 18,30 11,20"
        fill="#E8F5E9"
      />
      {/* Wordmark */}
      <text
        x="38"
        y="16"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="700"
        fontSize="11"
        fill="#2E7D32"
      >
        ALL RECYCLING
      </text>
      <text
        x="38"
        y="30"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="700"
        fontSize="11"
        fill="#2C2C2C"
      >
        LEADERS
      </text>
    </svg>
  );
}
