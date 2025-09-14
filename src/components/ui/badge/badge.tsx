interface BadgeProps {
  type: string;
  label: string;
}

const Badge = ({ type, label }: BadgeProps) => {
  const getBadgeClass = (): string | null => {
    switch (type) {
      case "In Progress":
        return "text-white bg-purple-500 ";
      default:
        return null;
    }
  };

  return (
    <span
      className={`inline-flex  px-2.5 py-1 text-xs font-bold rounded-md ${getBadgeClass()}`}
    >
      {label}
    </span>
  );
};

export { Badge };
