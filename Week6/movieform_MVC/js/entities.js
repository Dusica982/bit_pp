class Genre {
    constructor(name) {
        this.name = name;
    }

    getData() {
        var firstLetter = this.name.slice(0, 1);
        var firstLetterUpper = firstLetter.toUpperCase();
        var lastLetter = this.name.slice(-1);
        var lastLetterUpper = lastLetter.toUpperCase();
        var firstAndLastLetter = firstLetterUpper + lastLetterUpper;
        return firstAndLastLetter;
    }
}



class Movie {
    constructor(title, movieLength, genre) {
        this.title = title;
        this.movieLength = movieLength;
        this.genre = genre;
    }

    getData() {
        var movieData = this.title + ", " + this.movieLength + "min, " + this.genre.getData();
        return movieData;
    }
}
