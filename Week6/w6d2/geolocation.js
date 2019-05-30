function getGeoData() {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "http://www.geoplugin.net/xml.gp?82.117.204.106");
    ajax.send();

    ajax.addEventListener('load', function () {
        var element = ajax.responseXML.querySelector("geoplugin_countryName");
        var country = element.textContent;


        var h1 = document.createElement('h1');
        h1.textContent = country;

        document.querySelector('body').appendChild(h1);
    })
}
getGeoData(); 