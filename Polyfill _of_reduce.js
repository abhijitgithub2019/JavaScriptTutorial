const arr =[1,2,3];



Array.prototype.createReduce = function(cb, arg1){
    let arr = this;
    let initialValue, initialindex, storedValue;
    if(arg1!= undefined) {
        initialValue = arg1;
        initialindex = 0;
    } else {
        initialValue = arr[0];
        initialindex = 1;
    }

    storedValue = initialValue;

    for(let i = initialindex; i < arr.length; i++) {
        storedValue = cb(storedValue, arr[i]);
    }
    return storedValue;
}

let arr1 = [{name: "abhi", payment: 10000}, {name: "Krishna", payment: 80000}, {name: "Ritu", payment: 20000}];


const s = arr1.reduce((prev, cur)=> {
    return prev + cur.payment;
},0);

const avg = s/arr1.length;
// console.log(avg);

const s1 = arr1.createReduce((prev, cur)=> {
    return prev + cur.payment;
},0);


//Polyfill_exercise2

const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
];



//output: {a:1, b:1, c:2, d:2, f:2, g:1}
//prev => obj : {
//a: 1
//}
let i = input.flat().createReduce((prev, cur)=> {
     if(prev[cur]) {
        prev[cur]++;
     } else {
        prev[cur] = 1;
     }
     return prev;
},{});

//console.log(i);
// Exercise -3

const students = [
    { name: "Abhi", scores: [90, 85, 92, 52] },
    { name: "Steve", scores: [75, 80, 85, 76] },
    { name: "Heena", scores: [90, 95, 85, 98] },
    { name: "Krishna", scores: [100, 100, 100, 89] },
  ];

let d = students.createReduce((prev, cur)=> {
       let a = (cur.scores.createReduce((a,b)=> a+b))/cur.scores.length;
        if(prev.avg) {
                if(prev.avg < a) {
                    prev.avg = a;
                    prev.name = cur.name;
                }
        } else {
            prev.avg = a;
            prev.name = cur.name;
        }
        return prev;
},{});

console.log(d.name, d);


