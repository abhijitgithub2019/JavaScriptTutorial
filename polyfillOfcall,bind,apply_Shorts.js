let Person = {
  name: "abhi",
  age: 25,
  printDetails: function (location, company) {
    console.log(
      this.name +
        " is " +
        this.age +
        "years old , " +
        "staying in " +
        location +
        ", is  Working in ",
      company
    );
  },
};

let Person1 = {
  name: "Kohli",
  age: 36,
};
// Person.printDetails.call(Person1, "Bangalore", "ABB");
// Person.printDetails.apply(Person1, ["Bangalore", "ABBD"]);

let b = Person.printDetails.bind(Person1);
b("Bangalore", "ABC");

// Now we will create polyfill for call, apply and bind.

Function.prototype.myCall = function(o, ...arg) {
   let obj = o;
   obj.fn = this;
   obj.fn(...arg);
}
// Person.printDetails.myCall(Person1, "Bangalore", "ABB");

Function.prototype.myApply = function(o, arg) {
    let obj = o;
    obj.fn = this;
    obj.fn(...arg);
}


Function.prototype.myBind = function() {
    let obj = o;
    obj.fn = this;
    return function(...arg) {
        obj.fn(...arg);
    }
}

let b1 = Person.printDetails.bind(Person);
b1("Bangalore", "ABC");

// Person.printDetails.myApply(Person, ["Bangalore", "ABBD"]);