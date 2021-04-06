(() => {
  const throttle = (type, name, obj) => {
    obj = obj || window;
    let running = false;

    const func = () => {
      if (running) return;

      running = true;

      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  throttle('resize', 'optimizedResize');
})();

const throttle = function (cb, delay) {
  return function (args) {
    let previousCall = window.lastCall;
    window.lastCall = Date.now();

    if (previousCall === undefined || window.lastCall - previousCall > delay) {
      cb(args);
    }
  };
};

// const throttle = function (cb, delay) {
//   return function (args) {
//     let windowEl = this;
//     console.log(windowEl);
//     if (windowEl === undefined) windowEl = window;
//     let previousCall = windowEl.lastCall;
//     windowEl.lastCall = Date.now();

//     if (
//       previousCall === undefined ||
//       windowEl.lastCall - previousCall > delay
//     ) {
//       cb(args);
//     }
//   };
// };

const debounce = function (cb, delay) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();

    if (previousCall && this.lastCall - previousCall <= delay) {
      clearTimeout(this.lastCallTimer);
    }

    this.lastCallTimer = setTimeout(() => cb(args), delay);
  };
};

export { debounce, throttle };
