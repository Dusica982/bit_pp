var controllerModel = (function (ui, data) {

    function setUpEventListener() {
        $("#button").click(function () {

            var getUserData = ui.getSearchInput();

            function onSuccess(data) {
                ui.displayUsers(data);
            }

            data.getUsers(getUserData, onSuccess);
            ui.reset();


        })
    }


    function init() {
        setUpEventListener();
    }

    return {
        init: init
    }


})(uiModel, dataModel);