interface ProjectsListPercentageProps {
  value: number;
}

const ProjectsListPercentage = ({ value }: ProjectsListPercentageProps) => {
  const size = 20;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex items-center gap-2 font-extrabold text-sm">
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-gray-100 dark:stroke-gray-600"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="stroke-green-500"
        />
      </svg>
      <span>{value}% complete</span>
    </div>
  );
};

export { ProjectsListPercentage };
