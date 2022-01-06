import { sxProps, parseSxToCSSProperties } from "./sx";
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
  id: props.id,
  className: props.className,
  title: props.title,
  //omit [style: props.style] due to genInlineCSSStyles
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
