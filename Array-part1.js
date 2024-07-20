let arr = new Array(10);
let arr1 = [10,20,30,40];
let arr2 = [1,2,3,4];
let arr4 = [[1,2], [3,4], [5,6]];
arr1.push(80); 
arr1.shift(180);
arr1.pop();
arr1.shift();
arr2.splice(3, 0, 9);
console.log(arr2[4]);
arr2.splice(2 , 2 , 9);
arr2.length = 4

//start index =>   < -arr.length  =>  start Index = 0;
//startindex = -2
//start = start + arr2.length
     // = -2 + 4
     //start = 1

//-5 < -4  => start => 0
//end  => -1+4
// let a = arr2.slice(1,-1); // 0,3

arr2.slice(1,-1);
let arr2 = [9,2,100,7,5]; // \
arr2.sort();
//sort(comparefn)

let arr3 = ["abhi" , "sachin", "rohit", "kohli"];









