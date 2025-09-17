import type { PropsWithChildren } from "react";
import Subtitle from "./Subtitle";

type Props = {
  icon: React.ReactNode;
  title: string;
} & PropsWithChildren;

const TipCard = ({ icon, title, children }: Props) => {
  return (
    <div>
      <div>
        <div>{icon}</div>
        <Subtitle>{title}</Subtitle>
      </div>
      <p>{children}</p>
    </div>
  );
};

export default TipCard;
