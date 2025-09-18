import type { PropsWithChildren } from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
} & PropsWithChildren;

const HowToCard = ({ icon, title, children }: Props) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-cyan-100/60">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500">{children}</p>
    </div>
  );
};

export default HowToCard;