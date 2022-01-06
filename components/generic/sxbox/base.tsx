import { sxProps, parseLengthValue, parseSxToCSSProperties } from "./sx";
import { merge } from "./utils";
import { TBasicAttributes, TDOMAttributes } from "./attributes";
export type { BoxProps };
export { genInlineCSSStyles, genHTMLAttributes, Box };

type BoxProps = { sx?: sxProps } & sxProps &
  TBasicAttributes &
  TDOMAttributes<HTMLElement>;

//priorities: props(direct style) > props.sx
const genInlineCSSStyles = (props: BoxProps): React.CSSProperties =>
  props.sx != null
    ? merge(parseSxToCSSProperties(props.sx), parseSxToCSSProperties(props))
    : parseSxToCSSProperties(props);

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
