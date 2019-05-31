var uiModel = (function () {

    var inputData = $("#input");
    var $main = $(".main");

    function getSearchInput() {
        return inputData.val();
    }

    function displayUsers(data) {

        var users = data.items;


        users.forEach(function (user) {
            var photo = user.avatar_url;
            var username = user.login;

            var container = $("<div></div>");
            var img = $("<img></img>").attr("src", photo);

            var all = container.append(img);

            $main.prepend(all);
            $main.append("<p>" + username + "</p>");


        })


    }

    function reset() {
        inputData.text("");
    }


    return {
        getSearchInput: getSearchInput,
        displayUsers: displayUsers,
        reset: reset
    }





})();



