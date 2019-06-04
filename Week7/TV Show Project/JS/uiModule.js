var uiModule = (function () {
  var $searchInput = $(".input");
  var $showArea = $(".shows");

  function renderShows(shows) {
    $showArea.append('<h1 class="main-title">Popular Shows</h1>')
    shows.forEach(function (show) {

      var template = `
        <a href="#">
          <div class="col-4 tv-show d-inline-block" data-show-id="${show.id}">
            <img src="${show.image.medium}" alt="">
            <h4 class="show-name">${show.name}</h4>
          </div>
        </a>`;

      $showArea.append(template);
    });

  }

  function renderSingleShow(show) {
    $showArea.html('');
    $showArea.append('<h1 class="main-title">' + show.name + '</h1>')

    var seasons = '';
    show._embedded.seasons.forEach(function (show) {
      seasons += '<li>' + show._embedded.seasons[0] + '<li>';
    });

    console.log(seasons);

    var templateString = `
    <div class="single-show">
      <h1>${show.name}</h1>
      <img src="${show.image.medium}" alt="">
      <ul>Seasons
      ${seasons}
      </ul>
      <ul>Cast
      </ul>
      <h3>Show Details</h3>
      <p>${show.summary}</p>
    </div>`;




    $showArea.append(templateString);
  }

  function getSearchInput() {
    return $searchInput.val();
  }

  return {
    renderShows: renderShows,
    renderSingleShow: renderSingleShow
  };
})();
