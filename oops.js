class Employee {
    #EmplyeeId=1;
    #EmplpoyeeList = {};
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
     #ValidateEmployee(id) {
        if(this.#EmplpoyeeList[id]){
            return true;
        }
        return false;
     }
     OpenGate(id, name){
        if(this.#EmplyeeId === id && this.name ===name && this.#ValidateEmployee(id)) {
            console.log("Employee can enter inside the office");
        } else {
            console.log("Contact with Security person");
        }
     }

    setEmployeeID(id) {
        this.#EmplyeeId = id;
        this.#EmplpoyeeList[id] = 1;
    }
    removeId(id){
        delete this.#EmplpoyeeList[id];
    }

    printWorkingHours() {
        console.log(this.name+ " Should work for 70 hours");
    }

}

class GovtEmployee extends Employee {
     constructor(name, age, type){
        super(name , age);
        this.type = type;
     }

     printWorkingHours() { 
        console.log(this.name + " is " + this.type +  " Employee worked for 5 hours");
     }
}

class ITEmployee extends Employee {
    constructor(name, age){
        super(name, age);
    }
    printWorkingHours(hours) { 
        console.log(this.name + " Employee worked for" + hours + "hours");
     }
}

let m = new Employee("Abhi", 29);
m.printWorkingHours();
let g = new GovtEmployee("Rahul", 59, "Fulltime");
g.printWorkingHours();

let t = new ITEmployee("Sachin", 25);
t.printWorkingHours(100);


// console.log(g);


// console.log(m.#EmplyeeId);
// m.setEmployeeID(102029);
// m.removeId(102029);
// m.OpenGate(102029, m.name);