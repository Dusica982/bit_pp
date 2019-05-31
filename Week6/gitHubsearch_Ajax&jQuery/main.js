$(function () {
    var input = $("#input");
    var $main = $('.main');

    $("#button").click(function (event) {
        console.log("Click", input.val());
        var searchString = input.val()

        $.get("https://api.github.com/search/users?q=" + searchString, function (res) {
            console.log("res", res);

            var users = res.items;

            users.forEach(function (user) {
                var photo = user.avatar_url;
                var id = user.id;
                var username = user.login;

                var container = $("<div></div>");
                var img = $("<img></img>").attr("src", photo);

                var all = container.append(img);

                $main.prepend(all);
                $main.append("<p>" + username + "</p>");

            })

        });


    })


});

