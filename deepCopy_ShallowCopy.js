let map = new Map();
map.set(0, 1);
map.set(1, 2);
map.set(2, 3);
let obj1 = {
    name : "abhi",
    age: 28,
    address: {
        pincode: 722101
    },
    data: map
}

// let obj2 = obj1;
// let obj2 = {...obj1};
// obj2.name ="Sachin";
// obj2.address.pincode ="500121";
//  console.log(obj1, obj2);

//Deep copy
// let obj2 = JSON.parse(JSON.stringify(obj1));

let obj2 = structuredClone(obj1);
obj2.name ="Sachin";
obj2.address.pincode ="500121";
console.log(obj1, obj2);



