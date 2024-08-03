//function(a,b) => function(a)(b)

function mul(a, b) {
    return a*b;
}





function bindWithCurry (a , b) {
    return a*b;
}

let d = bindWithCurry.bind(this, 2);
// console.log("Bind: ", d(3))
// console.log("Bind: ", d(4))
// console.log("Bind: ", d(5))

function curryMul(a){
    return function(b){
        return a*b;
    }
}


// let c = curryMul(2);
// console.log(curryMul(2)(3));
// console.log(c(3));
// console.log(c(4));
// console.log(c(5));

// console.log(mul(2,3));
// console.log(mul(2,4));
// console.log(mul(2,5));

// function a(){
//     a();
// }

function mul(a) {
    let result = a;
    return function fn(b){
            if(b === undefined) {
                return result;
            }
            result = result *b;
            return fn;
    }
}

console.log(mul(2)(3)(4)(5)(10)(100)());


