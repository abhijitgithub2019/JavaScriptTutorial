let obj = {
    name: "Radhika",
    company: "Google",
    printDetails: function(place , pincode) {
        console.log("My name is : ", this.name +" Working in" +this.company +" stayed in ", place, pincode);
    }
}

let obj1 = {
    name: "Krishna",
    company: "Twitter"
}


//obj.printDetails.call(obj1);

Function.prototype.createCall = function(o, ...data) {
    let obj = o;
    obj.fn = this;
    obj.fn(...data);
}




// obj.printDetails.createCall(obj1, "Kolkata", 722101);

Function.prototype.createApply = function(o, data) {
    let obj = o;
    obj.fn = this;
    obj.fn(...data);
}

let d = ["Mumbai", 562562]
// obj.printDetails.apply(obj1,d);
// obj.printDetails.createApply(obj1,d);


Function.prototype.createBind = function(o) {
  let obj = o;
   obj.fn = this;
    return function(...data) {
        obj.fn(...data);
    }
}

// let f = obj.printDetails.bind(obj1);
// f("Kharagpur", 722121);

let f1 = obj.printDetails.createBind(obj1);
f1("California", 232444);