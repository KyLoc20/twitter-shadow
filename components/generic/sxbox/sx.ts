export type { sxProps };
export { parseLengthValue };
type sxProps = {
  bg?: string;
  h?: TLengthValue;
  w?: TLengthValue;
};
//A LengthValue could be:
//1. number between [0,1] -> percentage as string
//2. string with various units "1px" "200px" "75%" "3em" "20vw" "1.5" "inherit"-> direct style
//3. number 100 200 -> parse number with "px"
type TLengthValue = number | string;
const parseNumberWithPx = (v: number | undefined) =>
  v != null ? `${v}px` : undefined;
const parseLengthValue = (
  v: TLengthValue | undefined,
  defaultValue?: TLengthValue
) => {
  if (v != null) return typeof v === "number" ? parseNumberWithPx(v) : v;
  else
    return typeof defaultValue === "number"
      ? parseNumberWithPx(defaultValue)
      : defaultValue;
};
