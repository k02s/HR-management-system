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


let emp1 = new Employee(generateEmployeeID(), 'Ghazi Samer', 'Administration', 'Senior', 'assets/Ghazi.jpg', calculateSalary('Senior'))
let emp2 = new Employee(generateEmployeeID(), 'Lana Ali', 'Finance', 'Senior', 'assets/Lana.jpg', calculateSalary('Senior'))
let emp5 = new Employee(generateEmployeeID(), 'Omar Zaid', 'Development', 'Senior', 'assets/Omar.jpg', calculateSalary('Senior'))
let emp3 = new Employee(generateEmployeeID(), 'Tamara Ayoub', 'Marketing', 'Senior', 'assets/Tamara.jpg', calculateSalary('Senior'))
let emp4 = new Employee(generateEmployeeID(), 'Safi Walid', 'Administration', 'Mid-Senior', 'assets/Safi.jpg', calculateSalary('Mid-Senior'))
let emp7 = new Employee(generateEmployeeID(), 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'assets/Hadi.jpg', calculateSalary('Mid-Senior'))
let emp6 = new Employee(generateEmployeeID(), 'Rana Saleh', 'Development', 'Junior', 'assets/Rana.jpg', calculateSalary('Junior'))




console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);
console.log(emp5);
console.log(emp6);
console.log(emp7);



// render method 
Employee.prototype.render = function () {

  // document.write(`<h4>Employee name: ${this.fullName} <br> Department: ${this.department} <br> Employee Salary: ${this.salary} <br><br></h4>`) 

  // create div (it will be a container for card) element 
  let card = document.createElement("div");
  // append element to body 
  document.body.appendChild(card);
  // create and append image

  let image = document.createElement("img");
  image.src = this.imageURL;
  image.style.width = '100%';
  image.style.height = 'auto';
  card.appendChild(image);

  // create and append name 
  let name = document.createElement("p");
  name.textContent = `Name: ${this.fullName}`;
  card.appendChild(name);

  // create and append ID 
  let ID = document.createElement("p");
  ID.textContent = `ID: ${this.employeeID}`;
  card.appendChild(ID);

  // create and append department 
  let department = document.createElement("p");
  department.textContent = `Department: ${this.department}`;
  card.appendChild(department);

  // create and append level
  let level = document.createElement("p");
  level.textContent = `Level: ${this.level}`;
  card.appendChild(level);

  // create and append salary
  let salary = document.createElement("p");
  salary.textContent = `${this.salary}`;
  card.appendChild(salary);

  // style card
  card.style.border = "1px solid black";
  card.style.borderRadius = '8px';
  card.style.padding = '16px';
  card.style.margin = '8px';
  card.style.marginLeft = '25px';
  card.style.marginRight = '25px';
  card.style.width = '230px';
  card.style.backgroundColor = '#A4D0A4';
  card.style.display = 'inline-block';


}


for (let i = 0; i < allEmployees.length; i++) {

  allEmployees[i].render();
}

