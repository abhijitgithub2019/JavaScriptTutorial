let taskManger = {
  tasks: [
    `console.log("test1")`,
    `setTimeout(()=>console.log("test2"), 1000)`,
    `console.log("test3")`,
    `Promise.resolve().then(()=> console.log("test4"))`,
  ],
};
let i = 0;
let cS = document.getElementById("callStack");
let wApi = document.getElementById("webApi");
let macroE = document.getElementById("macroT");
let microE = document.getElementById("microT");

function onNextExecution() {
  if (i < taskManger.tasks.length) {
    let word = taskManger.tasks[i];
    let d = document.createElement("div");
    d.innerHTML = word;
    d.style.animation = "pop 2s";
    i++;
    cS.appendChild(d);
  }
}
let time = 3000;
function onStartExecution() {
  let elements = document.getElementById("callStack");
  for (let ele of elements.children) {
    const w = ele.innerHTML;
    if (w.startsWith("console")) {
      removeChild(ele, time);
    } else if (w.startsWith("setTime")) {
      let webWord = w.split("setTimeout(")[1];
      removeChild(ele, time);
      let d = document.createElement("div");
      d.innerHTML = webWord;
      d.style.animation = "pop 2s";
      wApi.appendChild(d);
      macroTaskQueue();
    } else if (w.startsWith("Promise")) {
      let webWord = w.split("then(")[1];
      removeChild(ele, time);
      let d = document.createElement("div");
      d.innerHTML = webWord;
      microE.appendChild(d);
    }
    time = time + 1000;
  }
  eventLoop();
}

function macroTaskQueue() {
  let elements = document.getElementById("webApi");
  setTimeout(() => {
    for (let ele of elements.children) {
      let str = ele.innerHTML;
      let s = str.split(",")[0].replace("&gt;", ">");
      let p = document.createElement("p");
      p.innerHTML = s;
      macroE.appendChild(p);
      removeChild(ele, 1000);
    }
  }, 4000);
}

const microTasksExecute = (elements) => {
  for (let ele of elements.children) {
    let str = ele.innerHTML.split("()=&gt;")[1];
    let d = document.createElement("div");
    d.innerHTML = str;
    removeChild(ele, 1000);
    cS.appendChild(d);
  }
};
const macroTaskExecute = (elements) => {
  for (let ele of elements.children) {
    let str = ele.innerHTML.split("()=&gt;")[1];
    let d = document.createElement("div");
    d.innerHTML = str;
    removeChild(ele, 1000);
    cS.appendChild(d);
  }
};

function eventLoop() {
  setTimeout(() => {
    setInterval(() => {
      if (isCallStackEmpty()) {
        let elements = document.getElementById("callStack");
        for (let ele of elements.children) {
            removeChild(ele, 1000);
        }
      } else if (IsMicroTaskEmpty()) {
        let elements = document.getElementById("microT");
        microTasksExecute(elements);
      } else {
        let elements = document.getElementById("macroT");
        macroTaskExecute(elements);
      }
    }, 2000);
  }, 6000);
}

function removeChild(ele, time) {
  ele.style.transition = `opacity ${time / 1000}s ease`;
  ele.style.opacity = 0;
  setTimeout(function () {
    ele.remove();
  }, time);
}

function IsMicroTaskEmpty() {
  let elem = document.getElementById("microT");
  let l = elem?.children.length || 0;
  return l;
}

function isCallStackEmpty() {
  let elem = document.getElementById("callStack");
  let l = elem?.children.length || 0;
  return l;
}
