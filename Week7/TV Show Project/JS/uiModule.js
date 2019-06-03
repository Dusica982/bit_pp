var uiModule = (function() {
  var $searchInput = $(".input");
  var $showArea = $(".shows");

  function renderShows(shows) {
    shows.forEach(function(show) {
      $showArea.append("<img src=" + show.image.medium + "> ");
      $showArea.append('<a href="' + show.name + '">' + show.name + "</a>");
    });
  }

  function getSearchInput() {
    return $searchInput.val();
  }

  // function displayFoundShows(showsArr) {

  //     $showArea.html('');
  //     if (!showsArr.length) {
  //         $showArea.append('<span class="nothing">There are no results</span>');
  //     }

  //     showsArr.forEach(function () {
  //         $showArea.append('<p>Hello</p>');

  //     });
  // };

  return {
    // displayPopularShows: displayPopularShows,
    // displayFoundShows: displayFoundShows,
    renderShows: renderShows
  };
})();
