var dataModule = (function () {

    function getPopShows(callback) {
        var popShowsUrl = 'http://api.tvmaze.com/shows';

        $.get(popShowsUrl, function (data) {
            callback(data.slice(0, 50));
        })
    };

    function getSingleShow(showId, callback) {
        var singleShowUrl = 'http://api.tvmaze.com/shows/' + showId + '?embed[]=seasons&embed[]=cast';

        $.get(singleShowUrl, function (data) {
            callback(data);

        })
    }


    return {
        // getShows: getShows,
        getPopShows: getPopShows,
        getSingleShow: getSingleShow
    }


})();