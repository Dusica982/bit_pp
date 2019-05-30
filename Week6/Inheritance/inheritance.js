(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getFullName = function () {
        return this.name + " " + this.surname;
    }


    function Employee(name, surname, job, salary) {
        Person.call(this, name, surname);
        this.job = job;
        this.salary = salary;
    }
    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;

    Employee.prototype.getData = function () {
        return this.name + ", " + this.surname + ", " + this.salary;
    };

    Employee.prototype.getSalary = function () {
        return this.salary;
    };

    Employee.prototype.increaseSalary = function () {
        var increases = this.salary + ((this.salary * 10) / 100)
        return increases;
    };


    function Developer(name, surname, job, salary, specialization) {
        Employee.call(this, name, surname, job, salary);
        this.specialization = specialization;
    }
    Developer.prototype = Object.create(Employee.prototype);
    Developer.prototype.constructor = Developer;

    Developer.prototype.getSpecialization = function () {
        return "" + this.specialization;
    }



    function Manager(name, surname, job, salary, department) {
        Employee.call(this, name, surname, job, salary);
        this.department = department;
    }

    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;

    Manager.prototype.getDepartment = function () {
        return "" + this.department;
    }

    Manager.prototypechangeDepartment = function (input) {
        var dep = this.department;
        dep = input;
        return dep;
    }


    var pera = new Person("Pera", "Peric");
    var laza = new Person("Laza", "Lazic");


    var pera = new Employee("Pera", "Peric", "JS developer", 1500);
    var laza = new Employee("Laza", "Lazic", "Java developer", 2500);

    var pera = new Developer("Pera", "Peric", "JS developer", 1500, "JS");
    var laza = new Developer("Laza", "Lazic", "Java developer", 2500, "Java");

    var pera = new Manager("Pera", "Peric", "JS developer", 1500, "Frontend");

    console.log(laza.increaseSalary());


})();