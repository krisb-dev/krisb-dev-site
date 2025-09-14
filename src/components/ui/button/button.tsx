import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const Button = ({ to, children, className }: ButtonProps) => {
  return (
    <Link
      className="inline-flex items-center justify-center self-start px-6 xl:px-8 py-2.5 font-bold dark:bg-green-600"
      href={to}
    >
      {children}
    </Link>
  );
};

export { Button };
