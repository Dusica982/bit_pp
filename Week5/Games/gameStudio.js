function GameStudio(name, address) {
    this.name = name;
    this.address = address;
    this.employees = [];
    this.games = [];

    this.makeGame = function (game) {
        this.games.push(game);
    };

    this.hireEmployee = function (employee) {
        this.employees.push(employee);
    };

    this.listAllGames = function () {
        var listOfGames = '';
        for (var i = 0; i < this.games.length; i++) {
            listOfGames += this.games[i].getGameList() + '\n';
        }
        return listOfGames
    }

    this.listAllEmployees = function () {
        var listOfEmployees = '';
        for (var i = 0; i < this.employees.length; i++) {
            listOfEmployees += this.employees[i].getEmployeesList() + '\n';
        }
        return listOfEmployees;
    }


}

var capcom = new GameStudio('Capcom', 'Bulevar Kralja Aleksandra 35'); //Pravljenje Game Studia

function Game(name, genre, recommendedAge) {
    this.name = name;
    this.genre = genre;
    this.recommendedAge = recommendedAge;
    this.getGameList = function () {
        return (
            '\n Name:' + this.name
            + '\n Genre:' + this.genre
            + '\n Recommended Age is:' + this.recommendedAge
        );
    }
};

//pravljenje Igara
var residentEvil = new Game('Resident Evil', 'Horror', '17+');
var monsterHunter = new Game('Monster Hunter World', "Role Playing Game", '12+');
var streetFighter = new Game('Street Fighter V', 'Fighting Game', '12+');


function Employee(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.getEmployeesList = function () {
        return (
            '\n Name:' + this.name
            + '\n Age:' + this.age
            + '\n Position is:' + this.position
        );
    }

};

//pravljenje Zaposlenih
var milos = new Employee("Milos", 26, "CEO");
var dusica = new Employee("Dusica", 37, "kafe kuvarica");
var nenad = new Employee("Nenad", 34, "Team lead");



capcom.hireEmployee(milos);
capcom.hireEmployee(dusica);
capcom.hireEmployee(nenad);

capcom.makeGame(residentEvil);
capcom.makeGame(monsterHunter);
capcom.makeGame(streetFighter);

var gameInfo = capcom.listAllGames();
var employeeInfo = capcom.listAllEmployees();
console.log(gameInfo);
console.log(employeeInfo);

