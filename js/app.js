/* 
LAB 08
'use strict';

let employeeID = 999; // this variable for calculate id method its like start point



// objects
let employee1 = {
    employeeID: generateEmployeeID(),
    fullName: 'Ghazi Samer',
    department: 'Administration',
    level: 'Senior',
    imageURL: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',


    // method to calaulate salary and netSalary
    Salary: function () {
        this.salary = calculateSalary(this.level);
    }

};


let employee2 = {
    employeeID: generateEmployeeID(),
    fullName: 'Lana Ali',
    department: 'Finance',
    level: 'Senior',
    imageURL: 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=600',

    // method to calaulate salary and netSalary
    Salary: function () {
        this.salary = calculateSalary(this.level);
    }
};

let employee3 = {
    employeeID: generateEmployeeID(),
    fullName: 'Tamara Ayoub',
    department: 'Marketing',
    level: 'Senior',
    imageURL: 'https://images.pexels.com/photos/3747446/pexels-photo-3747446.jpeg?auto=compress&cs=tinysrgb&w=600',

    // method to calaulate salary and netSalary
    Salary: function () {
        this.salary = calculateSalary(this.level);
    }
};

let employee4 = {
    employeeID: generateEmployeeID(),
    fullName: 'Safi Walid',
    department: 'Administration',
    level: 'Mid-Senior',
    imageURL: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600',

    // method to calaulate salary and netSalary
    Salary: function () {
        this.salary = calculateSalary(this.level);
    }
};

let employee5 = {
    employeeID: generateEmployeeID(),
    fullName: 'Omar Zaid',
    department: 'Development',
    level: 'Senior',
    imageURL: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600',

    // method to calaulate salary and netSalary
    Salary: function () {
        this.salary = calculateSalary(this.level);
    }
};

let employee6 = {
    employeeID: generateEmployeeID(),
    fullName: 'Rana Saleh',
    department: 'Development',
    level: 'Junior',
    imageURL: 'https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=600',

    // method to calaulate salary and netSalary
    Salary: function () {
        this.salary = calculateSalary(this.level);
    }
};

let employee7 = {
    employeeID: generateEmployeeID(),
    fullName: 'Hadi Ahmad',
    department: 'Finance',
    level: 'Mid-Senior',
    imageURL: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600',

    // method to calaulate salary and netSalary
    Salary: function () {
        this.salary = calculateSalary(this.level);
    }
};

// method to genarate ID
function generateEmployeeID() {

    employeeID++;
    return employeeID;

}

// method to calaulate salary and netSalary
function calculateSalary(employeeLevel) {

    let salary = 0;
    let netSalary = 0;

    // Math.floor(min + Math.random() * (max - min + 1));

    switch (employeeLevel) {
        case "Senior":
            salary = Math.floor(1500 + Math.random() * (2000 - 1500 + 1));
            break;
        case "Mid-Senior":
            salary = Math.floor(1000 + Math.random() * (1500 - 1000 + 1));
            break;
        case "Junior":
            salary = Math.floor(500 + Math.random() * (1000 - 500 + 1));
            break;
    }
    netSalary = salary - (salary * 0.075);
    return netSalary;
}


// render method
function render() {

    const employeeContainer = document.getElementById("employee");

    employee1.Salary();
    employee2.Salary();
    employee3.Salary();
    employee4.Salary();
    employee5.Salary();
    employee6.Salary();
    employee7.Salary();

    let employeeData = "";

    employeeData += `Employee name: ${employee1.fullName} <br> Employee salary: ${employee1.salary}<br><br>`;
    employeeData += `Employee name: ${employee2.fullName} <br> Employee salary: ${employee2.salary}<br><br>`;
    employeeData += `Employee name: ${employee3.fullName} <br> Employee salary: ${employee3.salary}<br><br>`;
    employeeData += `Employee name: ${employee4.fullName} <br> Employee salary: ${employee4.salary}<br><br>`;
    employeeData += `Employee name: ${employee5.fullName} <br> Employee salary: ${employee5.salary}<br><br>`;
    employeeData += `Employee name: ${employee6.fullName} <br> Employee salary: ${employee6.salary}<br><br>`;
    employeeData += `Employee name: ${employee7.fullName} <br> Employee salary: ${employee7.salary}<br><br>`;

    employeeContainer.innerHTML = employeeData;

}

// call render 
render();

// show in console
console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(employee5);
console.log(employee6);
console.log(employee7);


*/



// LAB 09

'use strict';

let employeeID = 999; // this variable for calculate id method its like start point

const allEmployees = [];

// method to calaulate salary and netSalary
function calculateSalary(employeeLevel) {

    let salary = 0;
    let netSalary = 0;
  
    switch (employeeLevel) {
      case "Senior":
        salary = Math.ceil(1500 + Math.random() * (2000 - 1500 + 1));
        break;
      case "Mid-Senior":
        salary = Math.ceil(1000 + Math.random() * (1500 - 1000 + 1));
        break;
      case "Junior":
        salary = Math.ceil(500 + Math.random() * (1000 - 500 + 1));
        break;
    }
    netSalary = salary - (salary * 0.075);
    return netSalary;
  }
  

// method to genarate ID
function generateEmployeeID() {

    employeeID++;
    return employeeID;

}

// create objects by constructor
function Employee(ID, name, department, level, imageURL, salary) {

    this.employeeID = generateEmployeeID();
    this.fullName = name;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = calculateSalary(level);

    allEmployees.push(this);

}


let emp1 = new Employee(generateEmployeeID(), 'Ghazi Samer', 'Administration', 'Senior', 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', calculateSalary('Senior'))
let emp2 = new Employee(generateEmployeeID(), 'Lana Ali', 'Finance', 'Senior', 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=600', calculateSalary('Senior'))
let emp3 = new Employee(generateEmployeeID(), 'Tamara Ayoub', 'Marketing', 'Senior', 'https://images.pexels.com/photos/3747446/pexels-photo-3747446.jpeg?auto=compress&cs=tinysrgb&w=600', calculateSalary('Senior'))
let emp4 = new Employee(generateEmployeeID(), 'Safi Walid', 'Administration', 'Mid-Senior', 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600', calculateSalary('Mid-Senior'))
let emp5 = new Employee(generateEmployeeID(), 'Omar Zaid', 'Development', 'Senior', 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600', calculateSalary('Senior'))
let emp6 = new Employee(generateEmployeeID(), 'Rana Saleh', 'Development', 'Junior', 'https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=600', calculateSalary('Junior'))
let emp7 = new Employee(generateEmployeeID(), 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600', calculateSalary('Mid-Senior'))




console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);
console.log(emp5);
console.log(emp6);
console.log(emp7);



// render method 
Employee.prototype.render = function () {

    document.write(`<h4>Employee name:   ${this.fullName} <br> Department:   ${this.department} <br> Employee Salary:  ${this.salary} <br><br></h4>`)

}


for (let i = 0; i < allEmployees.length; i++) {
    allEmployees[i].render();
}