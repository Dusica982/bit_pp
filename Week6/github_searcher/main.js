document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  var request = new XMLHttpRequest();
  request.open("GET", "https://api.github.com/search/users?q=" + document.getElementById("input").value);
  request.send();

  request.onload = function() {
    var response = JSON.parse(request.response).items;

    var mainDiv = document.getElementById("maindiv");
    mainDiv.innerHTML = "";

    response.forEach(element => {
      var divChild = document.createElement("div");
      var divChildImg = document.createElement("img");
      divChildImg.setAttribute("src", element.avatar_url);

      divChild.appendChild(divChildImg);

      var span = document.createElement("span");
      span.innerHTML = element.login;

      divChild.appendChild(span);

      mainDiv.appendChild(divChild);
    });

    // console.log(response);
  };
});
