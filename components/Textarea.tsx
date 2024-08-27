type Props = {
  labelFontSize?: string;
  inputFontSize?: string;
  marginTop?: string;
  type?: string;
  label?: string;
  labelStyle?: string;
  height?: string
  value: string;
  onChange: (e: any) => void;
  error: string;
  inputStyle?: string
};
export default function Textarea({
  labelFontSize,
  inputFontSize,
  height,
  marginTop,
  label,
  labelStyle,
  value,
  onChange,
  inputStyle,
  error
}: Props) {
  return (
    <div className="mt-5" style={{ marginTop: `${marginTop}` }}>
      <p
        className={`${labelStyle}`}
        style={{ fontSize: `${labelFontSize}` }}
      >
        {label}
      </p>
      <div style={{ height: `${height}` }} className="h-20 shadow-md">
        <textarea
          style={{ fontSize: `${inputFontSize}` }}
          id=""
          value={value}
          onChange={onChange}
          className={`w-full duration-300 ${
            error
              ? "border-red-500"
              : `${value.length > 0 ? "border-green-500" : "border-gray-200"}`
          } border-2 ${inputStyle} rounded h-full bg-transparent outline-none p-3`}        ></textarea>
      </div>
      <p className="mt-2 text-[red]">{error}</p>
    </div>
  );
}
