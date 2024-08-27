import { IconType } from "react-icons";
import { BsCheck } from "react-icons/bs";

type Props = {
  iconStyle?: string;
  borderRadius?: string;
  height?: string;
  width?: string;
  color?: string;
  marginTop?: string;
  marginBottom?: string;
  backgroundColor?: string;
  shadow?: string;
  paddingBlock?: string
  paddingInline?: string
  icon?: any;
  loading?: any;
  text?: string
  before?: boolean;
  fontSize?: string
};

export default function Button({
  icon,
  iconStyle,
  color,
  height,
  paddingInline,
  paddingBlock,
  width,
  borderRadius,
  marginTop,
  marginBottom,
  backgroundColor,
  shadow,
  text,
  fontSize,
  loading,
  before,
}: Props) {
  return (
    <button
      style={{
        height: `${height}`,
        width: `${width}`,
        marginTop: `${marginTop}`,
        marginBottom: `${marginBottom}`,
        borderRadius: `${borderRadius}`,
        color: `${color}`,
        paddingInline: `${paddingInline}`,
        paddingBlock: `${paddingBlock}`,
        backgroundColor: `${backgroundColor}`,
      }}
      className={`flex rounded w-full mt-5 mb-5 h-12 items-center font-semibold duration-300 active:scale-95 gap-2 text-white ${shadow} bg-blue-600 justify-center`}
    >
      {before && !loading && <span className={`${iconStyle}`}>{icon}</span>}
      {!loading && <span style={{fontSize: `${fontSize}`}}>{text}</span>}
      {!before && !loading && <span className={`${iconStyle}`}>{icon}</span>}
      {loading && <div className="loader"></div>}
    </button>
  );
}
