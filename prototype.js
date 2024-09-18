function Person(name) {
    this.name = name;
}

Person.prototype.getName = function(){
    console.log(this.name);
}

let c = new Person("Krishna");
let c1 = new Person("Krishna");
//c.getName();

function PersonIn(name, age) {
    this.name = name;
    this.age = age;
    this.printName = function() {
        console.log(this.name);
    }
}

function Doctor(profession){
    this.profession = profession
}

let p = new PersonIn();

let d = new Doctor("Doctor");

d.__proto__ = p;

// console.log(d);

let obj1 = {
    name: "Krishna",
    printName: function() {
        console.log("My name is : ", this.name)
    }
}

let obj2 = {
    name: "Sachin",
    __proto__: obj1
}

// obj2.__proto__ = obj1;

obj2.printName();
