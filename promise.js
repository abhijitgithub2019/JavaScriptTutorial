function getEmployees() {
  return [
    { name: "Abhi", salary: "32k", EmployeeId: 10020 },
    { name: "Krishna", salary: "92k", EmployeeId: 10021 },
  ];
}

// function FindSalary(employeeID) {
//     let emp = getEmployees();
//     console.log("Emp",emp);
//     let s = emp.filter((emp)=> emp.EmployeeId === employeeID);
//     return s[0].name;
// }

// function doLoginForEmplopyee() {
//        authenticationUser(data){
//              checkUserDetails() {
//                 getEmployeeDetails() {

//                 }
//              }
//        }
// }

//Pending
//fulfilled
//rejected

// console.log(FindSalary(10021));

// let p = new Promise((resolve, reject) => {
//     reject("Rejected data");
// });

//then , catch , finally

//then(onFulfilled, onRejected)

//catch(undefined ,onRejected)
// p.catch((error) => {
//   console.log("error", error);
//   return 10 * 2;
// }).then((data1) => {
//   console.log("Data1", data1);
//    dosomething();
// }).catch((data)=>{
//     console.log("catch", data);
// });
// console.log(p);



let p1 = new Promise((resolve, reject) => {
   setTimeout(()=>{
    console.log("P1 promise");
    resolve(10);
   }, 1000);
});


let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("P2 promise");
        resolve(20);
       }, 2000);
});


let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("P3 promise");
        resolve(30);
       }, 3000);
});

Promise.any([p1,p2,p3]).then((res)=>{
    console.log("res",res);
}).catch((error)=>{
    console.log("catch the error", error);
});


