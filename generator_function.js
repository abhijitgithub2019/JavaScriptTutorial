// function getName() {
//   return "hello World";
// }

// function* getNameGenerator() {
//   try {
//     // console.log(yield)
//     yield "Hello";
//     yield* getNumber();
//     yield "krishna";
//   } catch (err) {
//     console.log(err);
//   }
// }

// function *getNumber() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let g = getNameGenerator();

// // for(let value of g) {
// //     console.log(value);
// // }
// // g.next();
// // console.log(g.next(100))
// console.log(g.next());
// // g.throw("Error is defined");
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// // console.log(g.next());

// // console.log(getName());

function promise() {
  return new Promise((res) => {
    res(1000);
  });
}

function* Mypromsie() {
  let d = yield promise();
  console.log("Mypromsie", d);
  const m = d * 10;
//   console.log("m",m);
  yield m;
  return m;
}

let p = Mypromsie();

console.log(
  p.next().value.then((res) => {
    console.log("data : ", res);
    p.next(res);
    console.log(p.next());
    console.log(p.next());
  })
);
