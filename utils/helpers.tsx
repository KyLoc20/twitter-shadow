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
export { pick };
type X<T extends number> = {
  type: T;
  value: string;
};
type X1 = X<1>;
const x1: X1 = { type: 1, value: "x1" };
