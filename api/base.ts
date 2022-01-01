export { mockAPI, APIResponse, succeed, fail };
const noop: () => void = () => {};
//IMPORTANT 3 spread arguments ...args otherwise arguments will be a [args]
const mockAPI =
  <F extends (...args: any) => any>(func: F, delay: number = 500) =>
  (...args: Parameters<F>) =>
    new Promise<ReturnType<F>>((resolve, reject) => {
      //mock network delay
      setTimeout(() => {
        resolve(func(...args));
      }, delay);
    });

type StatusCode = 200 | 400;
class APIResponse<T> {
  _content: T | undefined;
  statusCode: StatusCode;
  constructor(code: StatusCode, content?: T) {
    this._content = content;
    this.statusCode = code;
  }
  get isSuccessful() {
    return this.statusCode === 200;
  }
  //different getter names provided
  get good() {
    return this.isSuccessful;
  }
  get successful() {
    return this.isSuccessful;
  }
  get result() {
    if (this.isSuccessful) return this._content;
    else return undefined;
  }
}
const succeed = <T>(content: T) => new APIResponse<T>(200, content);
const fail = <T>() => new APIResponse<T>(400);
