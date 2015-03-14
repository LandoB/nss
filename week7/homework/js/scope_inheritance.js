/*
  .....  YOUR MISSION  .....

  You are an HR manager and need a way to keep
  track of employees, which department they work
  in, and other staistical information. You need
  to build a simple JavaScript program that...

  1. Defines a Company, a Department, a Manager,
      and an Employee.

  2. When a Company object is created, you must
      be able to specify the name of the company

  3. When a Department object is created, you must
      be able to specify the name of the department.

  4. When a Manager object is created, you must
      be able to specify the following traits
        a. First name
        b. Last name

  5. When an Employee object is created, you must
      be able to specify the following traits
        a. First name
        b. Last name
        c. Age
        d. Marital status
        e. Salary
      Also, modify the Employee prototype to add the
      following methods (one example given):
        a. setDepartment - Override the default department
        b. getHourlyWage - This should return the hourly
                           rate for the annual salary
        c. setManager - Assign a Manager to an employee


  5. Employee must inherit from Department properties
<<<<<<< HEAD
  6. Manager must inherit from Department properties
  7. Department must inherit from Company properties
=======
  6. Manager must inherit Department properties
  7. Department must inherit Company properties
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
  8. Create a global variable that holds your name and have
      each type of object have a property named `creator`
      with the value of that variable.

*/

<<<<<<< HEAD
var creator = "Rolando Bernal";
=======
var creator = "Steve";
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49

// Define the Company function
function Company (name) {
  this.company = name;
  this.creator = creator;
}

// Define the Department function
function Department (name) {
  this.department = name;
}
<<<<<<< HEAD
Department.prototype = new Company("Lando B Web Solutions");

var department = new Department();
//console.log(department);

// Define the Manager function
function Manager (firstN, lastN) {
  this.firstName = firstN;
  this.lastName = lastN;
}
Manager.prototype = new Department("Software");

var manager = new Manager();
//console.log(manager);


// Define the Employee function.
function Employee (firstN, lastN, age, marStatus, salary) {
  this.firstName = firstN;
  this.lastName = lastN;
  this.age = age;
  this.marStatus = marStatus;
=======
Department.prototype = new Company("Lonely Planet");

// Define the Manager function
function Manager (first, last) {
  this.firstName = first;
  this.lastName = last;
}
Manager.prototype = new Department("Software");

// Define the Employee function.
function Employee (first, last, age, status, salary) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.status = status;
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
  this.salary = salary;
}
Employee.prototype = new Department("Software");

var employee = new Employee();
//console.log(employee);

// You can add methods to an object's prototype (see usage below)
Employee.prototype.setDepartment = function (department) {

  // The department property gets inherited from the Department
  // object, but can be overriden at any time by each Employee
  this.department = department;
}

<<<<<<< HEAD
var Steve = new Employee("Steve", "Brownlee", "Age", "Married", "1000000");
//console.log(Steve);

// You can add methods to an object's prototype (see usage below)
Employee.prototype.setManager = function (first, last) {

  // The department property gets inherited from the Department
  // object, but can be overriden at any time by each Employee
  this.manager = new Manager(first, last);
}

Employee.prototype.setHourlyWage = function (hourlyWage) {

  // The department property gets inherited from the Department
  // object, but can be overriden at any time by each Employee
  return this.salary / 2080;
}
=======
Employee.prototype.getHourlyWage = function () {
  return parseInt(this.salary) / 2080;
}




Employee.prototype.setManager = function (first, last) {
  this.manager = new Manager(first, last);
}



var Steve = new Employee("Steve", "Brownlee", "Age", "Married", 1000000);
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49

// Change the department for an employee to override the default
Steve.setDepartment("Accounting");
Steve.setManager("John", "Wark");
Steve.setManager("Dave", "Nolan");
Steve.setManager("Space", "Ghost");




// Change the manager for an employee to override the default
Steve.setManager("John", "Smith");

// Change the hourly wage for an employee to override the default
console.log('HOURLY SALARY:', Steve.setHourlyWage());


// Show the employee's properties
console.log(Steve);









