import isJest from './isJest';
export default function debounce(callback, delay) {
  let timerId;

  return async function (...args) {
    clearTimeout(timerId);

    return new Promise((resolve) => {
      timerId = setTimeout(
        async () => {
          const result = await callback.apply(this, args);
          resolve(result);
        },
        isJest() ? 0 : delay
      );
    });
  };
}
