import type { PropsWithChildren } from "react";
import React from 'react'; 

type Props = {
  icon?: React.ReactElement<{ className?: string }>;
  className?: string;
} & PropsWithChildren;

const Button = ({ className, icon, children }: Props) => {
  return (
    // Adicionamos as classes de flexbox aqui para centralizar o conteúdo - solução do copilot
    <button className={`flex items-center justify-center gap-2 ${className}`}>
      {icon && React.cloneElement(icon, { className: "w-5 h-5" })}
      <span>{children}</span>
    </button>
  );
};

export default Button;