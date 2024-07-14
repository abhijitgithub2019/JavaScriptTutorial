function MovieName(movie, actor) {
    this.moviename = movie;
    this.actor = actor

}

MovieName.prototype.printCast = function(){
    return this.actor + "casted"+this.moviename;
}

let m = new MovieName("Kalki", "Amitabh");
let m1 = new MovieName("Kalki", "Prabhas");
console.log(m1.hasOwnProperty("printCast"));
