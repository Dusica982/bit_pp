var dog = new XMLHttpRequest();
dog.open("GET", "https://dog.ceo/api/breeds/image/random");
dog.send();

dog.onload = function () {

    var data = JSON.parse(dog.responseText);
    console.log(data);
}