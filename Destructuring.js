let obj = {
    name: "Krishna",
    pincode: 560066,
    location: "Up",
    age: 126
}

let FirstName,LocationName,PinCode;

 ({name: FirstName , location: LocationName, pincode:PinCode, age=20} = obj);

FirstName = FirstName+"_" +LocationName;
console.log(FirstName , LocationName, PinCode, age);