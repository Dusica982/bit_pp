var $movieTitle = document.querySelector(".movie_title");
var $length = document.querySelector(".movie_length");
var $genre = document.querySelector("#movie_genre");

var $button = document.querySelector('#button');

var $moviesList = document.querySelector('.movies');

var $validation_movie = document.querySelector('.validation_movie');
var $validation_movielength = document.querySelector('.validation_movielength');
var $validation_genre = document.querySelector('.validation_genre');
var $totalSum = document.querySelector(".total");
// $form.reset() za resetovanje cele forme;

var listOfAllMovies = [];


function receiveData() {

    var title = $movieTitle.value;
    var length = $length.value;
    var genre = $genre.value;


    var data = {
        title: title,
        length: length,
        genre: genre
    }
    return data;

}

function validate(data) {
    if (data.title === "" || data.length === "" || data.length < 0 || data.genre === "empty") {
        return false;
    }

    return true;
}

function showError() {
    var invalidInput = "Error: invalid input";
    $validation_movielength.innerHTML = invalidInput;
    return invalidInput;
}


function createMovie(title, movieLength, genre) {
    var genreObj = new Genre(genre);
    var movie = new Movie(title, movieLength, genreObj);
    return movie;
}




function addMovie(movie) {
    listOfAllMovies.push(movie);
}



function displayMovie(movie) {

    var $singleMovieTitle = document.createElement('h4');
    $singleMovieTitle.textContent = movie.getData();
    $moviesList.append($singleMovieTitle);


}

function totalMovieLength(list) {
    var sumOfAllLenghts = 0;

    for (var i = 0; i < list.length; i++) {
        sumOfAllLenghts += parseInt(list[i].movieLength);
    }

    $totalSum.innerHTML = "All movie length: " + sumOfAllLenghts;
}

function clear() {
    $movieTitle.value = "";
    $length.value = "";
    $genre.value = "empty"
    $validation_movie.innerHTML = "";
}

function submitForm(event) {
    event.preventDefault();

    var data = receiveData();
    if (validate(data) === false) {
        showError();
        return;
    }

    var movie = createMovie(data.title, data.length, data.genre);
    addMovie(movie);
    displayMovie(movie);
    totalMovieLength(listOfAllMovies);
    clear();


}

$button.addEventListener('click', submitForm);
