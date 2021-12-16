//generating Actions from ActionPayload
export type ActionMap<P extends { [key: string]: any }> = {
  [Key in keyof P]: P[Key] extends undefined
    ? {
        type: Key;
        payload: {};
      }
    : {
        type: Key;
        payload: P[Key];
      };
};
