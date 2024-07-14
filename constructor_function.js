function MovieName(movie, actor) {
    if(!new.target) {
        console.log("new.target");
        return new MovieName(movie, actor);
    }
    this.moviename = movie;
    this.actor = actor

}

MovieName.prototype.printCast = function(){
    return this.actor + " casted in "+this.moviename;
}

let m = MovieName("Kalki", "Amitabh");
let m1 = new MovieName("Kalki", "Prabhas");
console.log(m1);
