process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
console.log("Test1");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
setTimeout(() => {
  console.log("Test2");
}, 0);
Promise.resolve().then(()=> console.log("Test3"));

console.log("Test4");

//outPut
//Test1
//Test4
//Test3
//Test2
//data



// CallStack
//console.log("Test3")
// WebAPIS
// (data) => console.log(data)
//console.log("Test2");

//MacroTask Queue
// (data) => console.log(data), console.log("Test2");
//MicroTask Queue


