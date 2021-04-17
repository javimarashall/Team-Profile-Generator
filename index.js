const inquirer = require("inquirer")

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee's ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your employee's e-mail?",
    },
]
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your engineer's ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's e-mail?",
    },
]
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail?",
    },
    {
        type = "input",
        name = "officeNumber",
        message = "What is your office number?",
    },
]
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your intern's ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your intern's e-mail?",
    },
]

function getEmployee(){
    inquirer.prompt(questions)
    .then(data => {
        const employee = new Employee (data.name, data.id, data.email)
        //team.push(employee);
    })
}