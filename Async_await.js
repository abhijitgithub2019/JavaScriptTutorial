function getEmployees() {
    let data =  [
        { name: "Abhi", salary: "32k", EmployeeId: 10020 },
        { name: "Krishna", salary: "92k", EmployeeId: 10021 },
      ];
    return new Promise((res, rej)=>{
        setTimeout(()=> {
            rej("Error in async");
        }, 1000);
       
    })
  }

//   async function getName(){
//     return "Abhi"
//   }
let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
     console.log("P1 promise");
     reject(10);
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

  async function getName() {
    try {
        // let userdetails = await getEmployees();
        // console.log(userdetails);
        let a1 = await p1;
        let a2 = await p2;
        let a3 = await p3;
        console.log(a1,a2,a3);
    } catch(e) {
        console.log("Error: ", e)
    }

    // return Promise.resolve("Abhi");
  }

//   let a = getName();

//   getName().then((d)=>{
//     console.log(d);
//   });

//   console.log(a);
//   console.log(getName);

getName();


