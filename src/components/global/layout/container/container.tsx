import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return <div className={clsx("container", className)}>{children}</div>;
};

export { Container };
