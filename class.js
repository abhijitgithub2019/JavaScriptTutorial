class MovieName {
    #age;
    _name1  = "Sarfira";
    set movieTitle(name1){
        console.log("name1", name1);
        this._name1 = name1
    }
    get movieTitle(){
        return this._name1;
    }

    getName() {
        return this._name1;
    }
}

let m = new MovieName();
m.getName();
m.movieTitle = "Kalki";
console.log(m.movieTitle);

