import type { PropsWithChildren } from "react";

type Props = {
  className?: string;
} & PropsWithChildren;

const Subtitle = ({ children, className }: Props) => {
  return <h3 className={`${className ?? ""}`}>{children}</h3>;
};
export default Subtitle;
