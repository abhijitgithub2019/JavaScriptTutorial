let p = document.getElementById("parent");

const handler = (event) => {
  //alert("Called from Parent");
  //   let ownEvent = new Event("code");
  // let cV = new CustomEvent('code', {detail: {isCodeDone: true}});

  //   p.addEventListener("code", (eve) => {
  //    // alert("The code event is triggered");
  //     console.log(eve);
  //   });
  //   p.dispatchEvent(cV);
//   console.log("Target: ", event.target.id);
//   console.log("currentTaget: ", event.currentTarget.id);
   const target = event.target.id;
   console.log(target);
   switch(target) {
    case 'Child1':
        alert("Child1 is  called");
        break;
    case 'Child2' :
        alert("Child2 is  called");
        break;

    default:
        break;
   }
};

p.addEventListener("click", handler, true);

// document.getElementById("subchild1").addEventListener('click', ()=> {
//     alert("Sub Child1 is  called");
// }, true);
// document.getElementById("subsubchild1").addEventListener('click', ()=> {
//     alert("Sub sub Child1 is  called");
// }, true);

// document.getElementById("Child2").addEventListener('click', ()=> {
//     alert("Child2 is  called");
// });

// document.getElementById("Child3").addEventListener('click', ()=> {
//     alert("Child3 is  called");
// });

// document.getElementById("Child4").addEventListener('click', ()=> {
//     alert("Child4 is  called");
// });

// setTimeout(() => {
//   p.removeEventListener("click", handler);
// }, 2000);
