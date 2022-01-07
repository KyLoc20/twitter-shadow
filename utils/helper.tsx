export {
  pick,
  updateRef,
  customeDateFormatter,
  customNumberFormatter,
  underConstruction,
};
export type { Writable, Tolerant };
//pick with helper
const pick = <O extends { [key: string]: any }>(
  keys: readonly string[],
  obj: O
) => _pick(keys as unknown as Extract<typeof keys[number], keyof O>[], obj);
//with type restriction keys can only be a literal like _pick(obj,["a","b","c"]) couldn't be a variable like let KEYS=["a","b","c"] _pick(obj,KEYS)
const _pick = <O extends { [key: string]: any }, K extends keyof O>(
  keys: K[],
  obj: O
): Pick<O, K> =>
  keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<O, K>);

type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};
type Tolerant<T> = T | undefined | null;
// basically Exclude<React.ClassAttributes<T>["ref"], string>
type UserRef<T> =
  | ((instance: T | null) => void)
  | React.RefObject<T>
  | null
  | undefined;

function updateRef<T>(ref: UserRef<T>, value: T | null) {
  if (ref == null) return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  (ref as Writable<typeof ref>).current = value;
}
type X<T extends number> = {
  type: T;
  value: string;
};
type X1 = X<1>;
const x1: X1 = { type: 1, value: "x1" };
//Number.toFixed(digits) float -> string
const customNumberFormatter = (value: number, digits: number = 1) => {
  //return a str decorated with a suffix whose value <= value
  const v = Math.abs(value);
  let str = value > 0 ? "" : "-";
  let helper =
    digits >= 1 && Number.isInteger(digits) ? Math.pow(10, digits) : 10;
  if (v > 1000 * 1000 * 1000) {
    str +=
      v % (1000 * 1000 * 1000) === 0
        ? `${v / (1000 * 1000 * 1000)}B`
        : `${Math.floor((v / (1000 * 1000 * 1000)) * helper) / helper}B`;
  } else if (v > 1000 * 1000) {
    str +=
      v % (1000 * 1000) === 0
        ? `${v / (1000 * 1000)}M`
        : `${Math.floor((v / (1000 * 1000)) * helper) / helper}M`;
  } else if (v > 1000) {
    str +=
      v % 1000 === 0
        ? `${v / 1000}K`
        : `${Math.floor((v / 1000) * helper) / helper}K`;
  } else {
    str += `${v}`;
  }
  return str;
};

const customeDateFormatter = (date: Date) => {
  let now = Date.now();
  let then = date.valueOf();
  let dist = now - then;
  if (dist < 0) return "Future";
  else if (dist < 1000 * 60) {
    //within 1 min
    return "Just now";
  } else if (dist < 1000 * 60 * 60) {
    //within 1 hour
    let min = Math.floor(dist / (1000 * 60));
    return `${min}m`;
  } else if (dist < 1000 * 60 * 60 * 24) {
    //within 1 day
    let hour = Math.floor(dist / (1000 * 60 * 60));
    return `${hour}h`;
  } else {
    let [year, month, day] = date.toLocaleDateString().split("/");
    return `${MONTH_MAP[parseInt(month)] || "Jan"} ${day}, ${year}`;
  }
};
const MONTH_MAP: { [month: number]: string } = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
const underConstruction = () => alert("🚧 THIS IS UNDER CONSTRUCTION!");
