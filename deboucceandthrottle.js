function fetchResult(ev) {
  //console.log(ev.target.value);
  //   if (ev.target.value !== "") {
  document.getElementById("results").innerHTML = ev.target.value;
  //}
}

// function fetchDebounceResult() {

// }

// fetchDebounceResult = debounce();

// function  debounce() {
//     let timer;
//     return function(ev) {
//         clearTimeout(timer);
//         timer = setTimeout(()=> {
//             document.getElementById("debounceResults").innerHTML = ev.target.value;
//         }, 500);
//     }
// }
let timer;
function fetchDebounceResult(ev) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    document.getElementById("debounceResults").innerHTML = ev.target.value;
  }, 500);
}
fetchThrottlingResult = throttling();
function throttling() {
  let isThrottle;
  return function (ev) {
    if (!isThrottle) {
      isThrottle = true;
      document.getElementById("throttlingResults").innerHTML = ev.target.value;
      setTimeout(() => {
        isThrottle = false;
      }, 1000);
    }
  };
}
