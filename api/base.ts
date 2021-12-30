export { mockAPI };
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
