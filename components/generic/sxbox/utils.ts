export { merge, transform, transformWithKeyMap };
export type { OneToOneStrategies, ManyToOneStrategies };
//Object.assign refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const merge = <O extends { [key: string]: any }>(...args: O[]): O => {
  return Object.assign({}, ...args);
};

// type SX = {
//   age?: number;
//   name?: string;
//   gender?: boolean;
// };
// let a: SX = { age: 15, name: "liu" };
// let b: SX = { age: 12, gender: false };
// let c: SX = { gender: true, name: "liu" };
// let d = merge<SX>(a, b, c);

//Mapped Types refer to https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
//source {a,b,c} => target {a1:fnA(a),b1:fnB(b),c1:fnC(c)}
type OneToOneStrategies<
  S extends { [key: string]: any }, //source
  T extends { [key: string]: any }, //target
  M extends { [K in keyof Required<S>]: string } //map
> = {
  [Key in keyof Required<S>]: {
    from: Key;
    to: M[Key];
    fn?: (prop: S[Key]) => T[M[Key]];
  };
};
//source {a,b,c} => target {m:fnM(source),n:fnN(source)}
type ManyToOneStrategies<
  S extends { [key: string]: any }, //source
  T extends { [key: string]: any } //target
> = {
  [Key in keyof Required<T>]: { fn: (props: S) => T[Key] };
};
//TRICK [Key in keyof Required<T>] ensure all keys are existing

/*
transform Source to Target
1.map keys: from key1 to key2
2.map values: from value1: obj[key1] to value2: fn(obj[key1])
*/
const transformWithKeyMap = <
  Source extends { [key: string]: any },
  Target extends { [key: string]: any },
  Map extends { [K in keyof Required<Source>]: string }
>(
  obj: Source,
  rules: OneToOneStrategies<Source, Target, Map>
) => {
  const target: Partial<Target> = {};
  for (let key1 in obj) {
    let value1 = obj[key1];
    let strategy = rules[key1];
    let key2 = strategy.to;
    let value2 = strategy.fn != null ? strategy.fn(value1) : value1;
    //discard undefined
    if (value2 != null) target[key2] = value2;
  }
  return target;
};

/*
transform Source to Target
map values for each key in Target: to value2: fn(Source)
*/
//TODO Array<keyof Required<Target>> Required here doesn't work
const transform = <
  Source extends { [key: string]: any },
  Target extends { [key: string]: any }
>(
  obj: Source,
  keys: Array<keyof Required<Target>>,
  rules: ManyToOneStrategies<Source, Target>
) => {
  const target: Partial<Target> = {};
  for (let key2 of keys) {
    let strategy = rules[key2];
    let value2 = strategy.fn(obj);
    //discard undefined
    if (value2 != null) target[key2] = value2;
  }
  return target;
};
