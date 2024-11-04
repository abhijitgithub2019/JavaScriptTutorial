

// 1. reference count
//0
// function d() {
//     //0
//     let obj = {


//     };
//     // 1
//     let a = obj;
    
// }

let reg = new FinalizationRegistry((msg)=> console.log("Logged : ", msg));
let name1 = "";

function getMyPromise() {
    return new Promise((res, rej)=>{
            res(10);
    });
}
function getMyName() {
    let x = {};
    // name1 =x;
    reg.register(x, "x before is collected");
    getMyPromise().then(()=> console.log(x));
    reg.register(x, "x  after promise is collected");
}

getMyName();

