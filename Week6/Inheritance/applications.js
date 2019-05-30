function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

App.prototype.isCCLicence = function () {
    if (this.licence === "CC") {
        return "This application has CC licence."
    } else {
        return "This application doesn't have CC licence."
    }
}

App.prototype.like = function () {
    return this.stars += 1;
}

App.prototype.showStars = function () {
    return this.stars;
}

App.prototype.getData = function () {
    return this.name + " " + this.licence + " " + this.stars
}

function WebApp(name, licence, stars, url, technologies) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
    var appData = Object.getPrototypeOf(WebApp.prototype).getData.call(this)
    return appData + " " + this.url + " " + this.technologies;
}

WebApp.prototype.reactBased = function () {
    if (this.technologies === "react") {
        return "This application is based on React."
    } else {
        return "This application isn't based on React."
    }
}

function MobileApp(name, licence, stars, platforms) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;
MobileApp.prototype.getData = function () {
    var appData = Object.getPrototypeOf(WebApp.prototype).getData.call(this)

    return appData + " " + this.platforms;
}

MobileApp.prototype.forAndroid = function () {
    if (this.platforms === "android") {
        return "This application is made for android."
    } else {
        return "This application isn't made for android."
    }
}

var facebook = new WebApp("Facebook", "CC", 5, "https://www.facebook.com/", "react");
var twitter = new MobileApp("Twitter", "CC", 4, "android");

console.log(facebook.getData());
console.log(twitter.getData());



