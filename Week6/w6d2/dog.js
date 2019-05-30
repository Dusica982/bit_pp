
// var inputEle = document.querySelector("#input");

// inputEle.addEventListener("click", addNewPicture);


// function addNewPicture(event) {
//     var dog = new XMLHttpRequest();
//     dog.open("GET", "https://dog.ceo/api/breeds/image/random");
//     dog.send();

//     dog.onload = function () {
//         var data = JSON.parse(dog.response);
//         console.log(data);
//         var imgEle = document.createElement("img");
//         imgEle.setAttribute("src", data.message);
//         document.querySelector("body").appendChild(imgEle);



//     }

// }


var inputEle = document.querySelector("#input");
var imgEle = document.createElement("img");
document.querySelector("body").appendChild(imgEle);

inputEle.addEventListener("click", addNewPicture);

function addNewPicture(event) {
    var dog = new XMLHttpRequest();
    dog.open("GET", "https://dog.ceo/api/breeds/image/random");
    dog.send();

    dog.onload = function () {
        var data = JSON.parse(dog.response);
        imgEle.setAttribute("src", data.message);

    }

}

