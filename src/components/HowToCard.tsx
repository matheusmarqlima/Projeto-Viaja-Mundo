import type { PropsWithChildren } from "react";
import Subtitle from "./Subtitle";

type Props = {
  icon: React.ReactNode;
  title: string;
} & PropsWithChildren;

const HowToCard = ({ icon, title, children }: Props) => {
  return (
    <div>
      <div>{icon}</div>
      <Subtitle>{title}</Subtitle>
      <p>{children}</p>
    </div>
  );
};
export default HowToCard;
