var controllerModule = (function(uiModule, dataModule) {
  function setupEventListener() {
    $("#button").click(function() {
      var getUserData = ui.getSearchInput();
    });
  }
})(uiModule, dataModule);
