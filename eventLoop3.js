console.log("Test1");
setTimeout(() => {
  console.log("Test2");
});
Promise.resolve(console.log("test4")).then(() => console.log("Test3"));
console.log("Test5");

// Output
//Test1
//test4
//Test5
//test3
//Test2

