type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type Props = {
  icon?: React.ReactNode;
  className?: string;
} & InputProps;

const InputText = ({ icon, className, ...props }: Props) => {
  return (
    <div className={`flex-1 relative ${className}`}>
      {icon}
      <input
        type="text"
        className={`rounded-xl bg-white/90 ${
          icon ? "pl-10" : "pl-3"
        } pr-3 py-2 h-12 w-full border border-slate-200 placeholder:text-gray-500 text-gray-700`}
        {...props}
      />
    </div>
  );
};
export default InputText;
