let arr = [2,3,4,5,6];
 //0/p: [4,6,8,10,12]

 let new_array1 = arr.map((item)=>{
        return item*2
 });

let arr1 = [1,2,3,[5,6,7,[8,9,12]]];

let new_array = arr1.flat();

let arr2 = ["Abhi", "Kohli"];

let m = arr2.map((a)=>{
        return a.split("");
});

let m1 = arr2.flatMap((a)=>{
    return a.split("");
});

let arr3 = [1,2,3,4,5];

let r = arr3.reduce((accu, current)=>{
    return accu+current
}, 0)

//console.log(r);


let r1 = arr3.every((item)=>{
    return  item > 0;
});
// console.log(r1);

let arr4 = ["My", "name ",undefined, "is", "Abhi"];

let r3 = arr4.join(" ");

console.log(r3);



