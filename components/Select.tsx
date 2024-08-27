import { BsChevronDown } from "react-icons/bs";

type Props = {
  labelStyle?: string;
  iconStyle?: string;
  label?: string;
  inputStyle?: string;
  parentStyle?: string;
  height?: string;
  options: string[];
  name: string;
  value: string;
  error: string;
  onChange: (e: any) => void;
};

export default function Select({
  labelStyle,
  inputStyle,
  name,
  value,
  error,
  onChange,
  iconStyle,
  parentStyle,
  label,
  options,
  height,
}: Props) {
  return (
    <div className={`${parentStyle}`}>
      <p className={`${labelStyle}`}>{label}</p>
      <div style={{ height: `${height}` }} className="h-12 relative shadow-md">
        <BsChevronDown
          className={`absolute top-1/2 -translate-y-1/2 right-2 ${iconStyle}`}
        />
        <select
          name={name}
          value={value}
          onChange={onChange}
          id=""
          className={`w-full ${inputStyle}
          ${
            error
              ? "border-red-500"
              : `${value.length > 0 ? "border-green-500" : "border-gray-200"}`
          }
           border-2 h-full rounded duration-300 bg-transparent outline-none px-3 appearance-none`}
        >
          <option value=""></option>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
      <p className="mt-2 text-[red]">{error}</p>
    </div>
  );
}
