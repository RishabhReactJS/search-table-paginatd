export default function debounce(func, timer) {
  let timeoutPoiner;

  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timeoutPoiner);
    timeoutPoiner = setTimeout(() => func.call(context, args), timer);
  };
}
