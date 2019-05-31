var dataModel = (function () {

    function getUsers(userName, onSuccess) {
        var requestURL = "https://api.github.com/search/users?q=" + userName;

        $.get(requestURL, function (data) {
            console.log(data);
            onSuccess(data);
        })
    }



    return {
        getUsers: getUsers,
    }




})();