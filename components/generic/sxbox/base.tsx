import { sxProps, parseLengthValue } from "./sx";
import { TBasicAttributes, TDOMAttributes } from "./attributes";
export type { BoxProps };
export { genInlineCSSStyles, genHTMLAttributes, Box };

type BoxProps = { sx?: sxProps } & sxProps &
  TBasicAttributes &
  TDOMAttributes<HTMLElement>;

//priorities: props.sx > props
const genInlineCSSStyles = (props: BoxProps): React.CSSProperties =>
  props.sx != null
    ? {
        background: props.sx.bg ?? props.bg,
        width: parseLengthValue(props.sx.w ?? props.w),
        height: parseLengthValue(props.sx.h ?? props.h),
      }
    : {
        background: props.bg,
        width: parseLengthValue(props.w),
        height: parseLengthValue(props.h),
      };

const genHTMLAttributes = (
  props: BoxProps
): TBasicAttributes & TDOMAttributes<HTMLElement> => ({
  className: props.className,
  //omit [style: props.style] due to genInlineCSSStyles
  id: props.id,

  //DOM EventHandler
  onMouseEnter: props.onMouseEnter,
  onMouseLeave: props.onMouseLeave,
  onMouseDown: props.onMouseDown,
  onClick: props.onClick,
});

function Box(props: React.PropsWithChildren<BoxProps>) {
  return (
    <div style={genInlineCSSStyles(props)} {...genHTMLAttributes(props)}>
      {props.children}
    </div>
  );
}
