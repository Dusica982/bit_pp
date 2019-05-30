var $movieTitle = document.querySelector(".movie_title");
var $length = document.querySelector(".movie_length");
var $genre = document.querySelector("#movie_genre");

var $button = document.querySelector('#button');

var $moviesList = document.querySelector('.movies');

var $validation_movie = document.querySelector('.validation_movie');
var $validation_movielength = document.querySelector('.validation_movielength');
var $validation_genre = document.querySelector('.validation_genre');
var $totalSum = document.querySelector(".total");

// var totalLength = 0;
var listOfAllMovies = [];

function createMovie(title, movieLength, genre) {
    var genreObj = new Genre(genre);
    return new Movie(title, movieLength, genreObj);
}

function submitForm(event) {
    event.preventDefault();

    var title = $movieTitle.value;
    if (title === "") {
        var text = 'You have to enter movie';
        $validation_movie.innerHTML = text;
        return;
    }


    var length = $length.value;
    if (length === "") {
        var textlength = "You have to enter movielength";
        $validation_movielength.innerHTML = textlength;
        return;
    }
    if (length < 0) {
        var invalidLength = "Invalid movielength";
        $validation_movielength.innerHTML = invalidLength;
        return;
    }

    var genre = $genre.value;

    if (genre === "empty") {
        var text = "You have to choose genre";
        $validation_genre.textContent = text;
        return;
    }


    var movie = createMovie(title, length, genre);

    var $singleMovieTitle = document.createElement('h4');
    $singleMovieTitle.textContent = movie.getData();

    $moviesList.append($singleMovieTitle);


    // function addMovie(movie) {
    //     listOfAllMovies.push(movie);
    // }
    // addMovie(movie);

    listOfAllMovies.push(movie);

    var sumOfAllLenghts = 0;
    for (var i = 0; i < listOfAllMovies.length; i++) {
        sumOfAllLenghts += parseInt(listOfAllMovies[i].movieLength);
    }
    $totalSum.innerHTML = "All movie length: " + sumOfAllLenghts;

    // $totalSum.innerHTML = sumOfAllLenghts;




    // totalLength += parseInt(length);
    // $totalSum.innerHTML = totalLength;

    $movieTitle.value = "";
    $length.value = 0;
    $genre.value = "empty"

}



$button.addEventListener('click', submitForm)



// var formElements = document.getElementById("myForm").elements;
// var postData = {};
// for (var i = 0; i < formElements.length; i++)
//     if (formElements[i].type != "submit")//we dont want to include the submit-buttom
//         postData[formElements[i].name] = formElements[i].value;

// console.log(postData);