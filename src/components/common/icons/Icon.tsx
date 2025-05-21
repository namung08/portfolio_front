interface IconProps {
  className?: string;
  path: string;
  viewBox?: string;
}

const Icon = ({
  className = "w-6 h-6",
  path,
  viewBox = "0 0 24 24",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox={viewBox}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
