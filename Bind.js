let badMPlayer = {
    name: "Sen",
    age: 25,
    isEligible: false,
    playOlympic : function(country, location){
         if(this.age > 20 && this.age < 35) {
            this.isEligible = true;
            console.log(this.name + " can play olympic for "+ country + " in " + location);
         } else {
            console.log(this.name + " not eligible to play olympic for"+ country+ " in " + location);
         }
    }
}

let badMPlayer1 = {
    name: "Abhi",
    age: 25,
    isEligible: false,
    playOlympic : function(country, location){
         if(this.age > 20 && this.age < 35) {
            this.isEligible = true;
            console.log(this.name + " can play olympic for "+ country + " in " + location);
         } else {
            console.log(this.name + " not eligible to play olympic for"+ country+ " in " + location);
         }
    }
}


let b = badMPlayer.playOlympic.bind(badMPlayer);
b("india", "paris");
let b1 = b.bind(badMPlayer1);
b1("india", "paris");
console.log(b);