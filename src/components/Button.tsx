import type { PropsWithChildren } from "react";

type Props = {
  icon: React.ReactNode;
  className?: string;
} & PropsWithChildren;

const Button = ({ className, icon, children }: Props) => {
  return (
    <button className={`${className}`}>
      {icon}
      {children}
    </button>
  );
};
export default Button;
