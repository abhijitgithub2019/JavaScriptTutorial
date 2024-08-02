// let badMPlayer = {
//     name: "Sen",
//     age: 25,
//     isEligible: false,
//     playOlympic : function(country, location){
//          if(this.age > 20 && this.age < 35) {
//             this.isEligible = true;
//             console.log(this.name + " can play olympic for "+ country + " in " + location);
//          } else {
//             console.log(this.name + " not eligible to play olympic for"+ country+ " in " + location);
//          }
//     }
// }

// let ttPlayer = {
//     name: "Akula", 
//     age: 31,
//     isEligible: false,
// }

// badMPlayer.playOlympic.apply(ttPlayer, ["India", "paris"]);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function ITEmployee(name, age,hours) {
    Person.call(this, name , age);
    this.hours = hours;
}

let i = new ITEmployee("Sachin", 35, 10);
console.log(i);