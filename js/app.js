'use strict';

let employeeID = 999; // this variable for calculate id method its like start point

// objects
let employee1 = {
    employeeID: generateEmployeeID(),
    fullName: 'Ghazi Samer',
    department: 'Administration',
    level: 'Senior',
    imageURL: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    salary: calculateSalary('Senior')
};

let employee2 = {
    employeeID: generateEmployeeID(),
    fullName: 'Lana Ali',
    department: 'Finance',
    level: 'Senior',
    imageURL: 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=600',
    salary: calculateSalary('Senior')
};

let employee3 = {
    employeeID: generateEmployeeID(),
    fullName: 'Tamara Ayoub',
    department: 'Marketing',
    level: 'Senior',
    imageURL: 'https://images.pexels.com/photos/3747446/pexels-photo-3747446.jpeg?auto=compress&cs=tinysrgb&w=600',
    salary: calculateSalary('Senior')
};

let employee4 = {
    employeeID: generateEmployeeID(),
    fullName: 'Safi Walid',
    department: 'Administration',
    level: 'Mid-Senior',
    imageURL: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600',
    salary: calculateSalary('Mid-Senior')
};

let employee5 = {
    employeeID: generateEmployeeID(),
    fullName: 'Omar Zaid',
    department: 'Development',
    level: 'Senior',
    imageURL: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600',
    salary: calculateSalary('Senior')
};

let employee6 = {
    employeeID: generateEmployeeID(),
    fullName: 'Rana Saleh',
    department: 'Development',
    level: 'Junior',
    imageURL: 'https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=600',
    salary: calculateSalary('Junior')
};

let employee7 = {
    employeeID: generateEmployeeID(),
    fullName: 'Hadi Ahmad',
    department: 'Finance',
    level: 'Mid-Senior',
    imageURL: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600',
    salary: calculateSalary('Mid-Senior')
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

