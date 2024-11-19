export const CircularProgress = ({
  width,
  timeLeft,
  duration,
  className,
  radiusRatio,
}) => {
  const radius = (width / 2) * radiusRatio;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = (circumference * timeLeft) / duration;

  return (
    <svg
      width={width}
      height={width}
      style={{ transform: "rotate(-90deg)" }}
      className={className}
    >
      <circle
        className="text-neutral-content"
        stroke="currentColor"
        strokeWidth="4"
        fill="transparent"
        cx={width / 2}
        cy={width / 2}
        r={radius}
      />
      <circle
        className="text-primary"
        stroke="currentColor"
        strokeWidth="4"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        fill="transparent"
        cx={width / 2}
        cy={width / 2}
        r={radius}
      />
    </svg>
  );
};
