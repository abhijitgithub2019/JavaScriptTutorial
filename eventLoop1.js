process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
console.log("Test1"); // callStack
fetch("https://jsonplaceholder.typicode.com/todos/1") // WebAPis
  .then((response) => response.json())
  .then((data) => console.log(data));
setTimeout(() => {
  console.log("Test2"); // WebAPis
}, 0);
console.log("Test3"); // callStack



//Output

//Test1
//Test3
//Test2
//data

// CallStack  => console.log("Test2"), 
// MacroTask Queue   =>  1. {
  //console.log("Test2"); // WebAPis
//}
// 2.(data) => console.log(data)


