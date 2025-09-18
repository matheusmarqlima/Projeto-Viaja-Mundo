import React, { type PropsWithChildren } from "react";
import Subtitle from "./Subtitle";

type Props = {
  icon: React.ReactElement<{ className?: string }>; // <-- Modificação para entrar os icones com className
  title: string;
} & PropsWithChildren;

const TipCard = ({ icon, title, children }: Props) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 flex flex-col gap-4 border-l-4 border-l-sky-500 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="bg-sky-100 p-3 rounded-full flex items-center justify-center">
          {React.cloneElement(icon, { className: "w-6 h-6 text-sky-600" })}
        </div>
        <Subtitle className="font-semibold text-lg">{title}</Subtitle>
      </div>
      <p className="text-slate-500">{children}</p>
    </div>
  );
};

export default TipCard;