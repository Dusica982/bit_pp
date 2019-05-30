var dataModule = (function () {

    var movies = [];

    class Movie {
        constructor(title, movieLength, genre) {
            this.title = title;
            this.movieLength = movieLength;
            this.genre = genre;
        }

    }


    function createMovie(title, movieLength, genre) {
        return new Movie(title, movieLength, genre);
    }


})();