type Props = {
  labelStyle?: string;
  inputStyle?: string;
  parentStyle?: string;
  height?: string;
  type?: string;
  label: string;
  name: string;
  value: string;
  error: string;
  onChange: (e: any) => void;
};

export default function Input({
  labelStyle,
  height,
  name,
  value,
  error,
  onChange,
  label,
  inputStyle,
  type,
  parentStyle,
}: Props) {
  return (
    <div className={`${parentStyle}`}>
      <p className={`${labelStyle}`}>{label}</p>
      <div style={{ height: `${height}` }} className="h-12 relative shadow-md">
        <input
          type={type === "number" ? "number" : "text"}
          name={name}
          value={value}
          onChange={onChange}
          id=""
          className={`w-full duration-300 ${
            error
              ? "border-red-500"
              : `${value.length > 0 ? "border-green-500" : "border-gray-200"}`
          } border-2 ${inputStyle} rounded h-full bg-transparent outline-none px-3`}
        />
      </div>
      <p className="mt-2 text-[red]">{error}</p>
    </div>
  );
}
