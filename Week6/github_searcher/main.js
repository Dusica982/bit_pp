var request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users");
request.send();

request.onload = function () {
    var response = request.response;

}