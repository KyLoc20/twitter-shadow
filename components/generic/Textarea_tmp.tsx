//calc sizing
const SIZING_STYLE_PROPERTIES = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak",
] as const;

type SizingProps = Extract<
  typeof SIZING_STYLE_PROPERTIES[number],
  keyof CSSStyleDeclaration
>;
type SizingStyle = Pick<CSSStyleDeclaration, SizingProps>;

type Sizing = {
  sizingStyle: SizingStyle;
  padding: number;
  border: number;
};
const getSizingData = (node: HTMLElement): Sizing | null => {
  const style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  const sizingStyle = pick(
    SIZING_STYLE_PROPERTIES as unknown as SizingProps[],
    style
  );
  const { boxSizing } = sizingStyle;

  // probably node is detached from DOM, can't read computed dimensions
  if (boxSizing === "") {
    return null;
  }
  const padding =
    parseFloat(sizingStyle.paddingBottom!) +
    parseFloat(sizingStyle.paddingTop!);

  const border =
    parseFloat(sizingStyle.borderBottomWidth!) +
    parseFloat(sizingStyle.borderTopWidth!);

  return {
    sizingStyle,
    padding,
    border,
  };
};
const HIDDEN_TEXTAREA_STYLE = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0",
} as const;

const forceHiddenStyles = (node: HTMLElement) => {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach((key) => {
    node.style.setProperty(
      key,
      HIDDEN_TEXTAREA_STYLE[key as keyof typeof HIDDEN_TEXTAREA_STYLE],
      "important"
    );
  });
};
const getHeight = (node: HTMLElement, sizingData: Sizing): number => {
  const height = node.scrollHeight;

  if (sizingData.sizingStyle.boxSizing === "border-box") {
    // border-box: add border, since height = content + padding + border
    return height + sizingData.border;
  }

  // remove padding, since height = content
  return height - sizingData.padding;
};
type CalculatedNodeHeights = number[];
let hiddenTextarea: HTMLTextAreaElement | null = null;
function calculateNodeHeight(
  sizing: Sizing,
  value: string,
  minRows = 1,
  maxRows = Infinity
): CalculatedNodeHeights {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tabindex", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    forceHiddenStyles(hiddenTextarea);
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }

  const { padding, border, sizingStyle } = sizing;
  const { boxSizing } = sizingStyle;

  Object.keys(sizingStyle).forEach((_key) => {
    const key = _key as keyof typeof sizingStyle;
    hiddenTextarea!.style[key] = sizingStyle[key] as any;
  });

  forceHiddenStyles(hiddenTextarea);

  hiddenTextarea.value = value;
  let height = getHeight(hiddenTextarea, sizing);

  // measure height of a textarea with a single row
  hiddenTextarea.value = "x";
  const rowHeight = hiddenTextarea.scrollHeight - padding;

  let minHeight = rowHeight * minRows;
  if (boxSizing === "border-box") {
    minHeight = minHeight + padding + border;
  }
  height = Math.max(minHeight, height);

  let maxHeight = rowHeight * maxRows;
  if (boxSizing === "border-box") {
    maxHeight = maxHeight + padding + border;
  }
  height = Math.min(maxHeight, height);

  return [height, rowHeight];
}
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
//use the property [style] independently
type CustomStyle = Omit<
  NonNullable<TextareaProps["style"]>,
  "maxHeight" | "minHeight"
> & {
  height?: number;
};
//define how the height of textarea changes
export type TextareaHeightChangeMeta = {
  rowHeight: number;
};
//extract the property [style] out of [TextareaProps]
export interface TextareaAutosizeProps extends Omit<TextareaProps, "style"> {
  maxRows?: number;
  minRows?: number;
  cacheMeasurements?: boolean;
  style?: CustomStyle;
  onHeightChange?: (height: number, meta: TextareaHeightChangeMeta) => void;
}
const noop = () => {};
const pick = <Obj extends { [key: string]: any }, Key extends keyof Obj>(
  props: Key[],
  obj: Obj
): Pick<Obj, Key> =>
  props.reduce((acc, prop) => {
    acc[prop] = obj[prop];
    return acc;
  }, {} as Pick<Obj, Key>);
const FlexibleTextarea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaAutosizeProps
> = (
  {
    cacheMeasurements,
    maxRows,
    minRows,
    onChange = noop,
    onHeightChange = noop,
    ...props
  },
  userRef: React.Ref<HTMLTextAreaElement>
) => {
  const libRef = React.useRef<HTMLTextAreaElement | null>(null);
  // const ref = useComposedRef(libRef, userRef);
  const ref = libRef;
  const heightRef = React.useRef(0);
  const measurementsCacheRef = React.useRef<Sizing>();
  const resizeTextarea = () => {
    const node = libRef.current!;
    const nodeSizingData =
      cacheMeasurements && measurementsCacheRef.current
        ? measurementsCacheRef.current
        : getSizingData(node);

    if (!nodeSizingData) {
      return;
    }

    measurementsCacheRef.current = nodeSizingData;

    const [height, rowHeight] = calculateNodeHeight(
      nodeSizingData,
      node.value || node.placeholder || "x",
      minRows,
      maxRows
    );

    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty("height", `${height}px`, "important");
      onHeightChange(height, { rowHeight });
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    resizeTextarea();
    onChange(event);
  };

  return <textarea {...props} onChange={handleChange} ref={ref} />;
};
