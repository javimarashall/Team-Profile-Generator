const inquirer = require("inquirer")

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your employee name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your employee e-mail?",
    },
]
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your engineer ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer e-mail?",
    },
    {
        type = "input",
        name = "officeNumber",
        message = "What is your office number?",
    },
]

function getEmployee(){
    inquirer.prompt(questions)
    .then(data => {
        const employee = new Employee (data.name, data.id, data.email)
        team.push(employee);
    })
}