var $movieTitle = document.querySelector(".movie_title");
var $length = document.querySelector(".movie_length");
var $genre = document.querySelector("#movie_genre");

var $button = document.querySelector('#button');

var $moviesList = document.querySelector('.movies');


function createMovie(title, movieLength, genre) {
    var genreObj = new Genre(genre);
    return new Movie(title, movieLength, genreObj);
}

function submitForm(event) {
    event.preventDefault();

    var title = $movieTitle.value;
    var length = $length.value;
    var genre = $genre.value;

    var movie = createMovie(title, length, genre);

    var $singleMovieTitle = document.createElement('h4');
    $singleMovieTitle.textContent = movie.getData();

    $moviesList.append($singleMovieTitle);

    $movieTitle.value = "";
    $length.value = "";
    $genre.value = "";
}











$button.addEventListener('click', submitForm)









// var formElements = document.getElementById("myForm").elements;
// var postData = {};
// for (var i = 0; i < formElements.length; i++)
//     if (formElements[i].type != "submit")//we dont want to include the submit-buttom
//         postData[formElements[i].name] = formElements[i].value;

// console.log(postData);
