const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const path = require("path");
const fs = require("fs");

const team = [];

const EngineerQuestions = [
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
    {
        type: "input",
        name: "github",
        message: "What is your engineer's gitHub?",
    },
];
const ManagerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your manager's ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your manager's e-mail?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
    },
];
const InternQuestions = [
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
    {
        type: "input",
        name: "school",
        message: "What is your intern's school name?",
    },
];

const createManager = () => {
    //ask the questions
    inquirer.prompt(ManagerQuestions).then(answers => {
        //create Manager object
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        //add newManager to teams array
        team.push(newManager);
        //ask
        wantMore();
    })
}; //void

const createIntern = () => {
    //ask the questions
    inquirer.prompt(InternQuestions).then(answers => {
        //create Intern object
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        //add newIntern to teams array
        team.push(newIntern);
        //ask
        wantMore();
    })
};

const createEngineer = () => {
    //ask the questions
    inquirer.prompt(EngineerQuestions).then(answers => {
        //create Engineer object
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        //add newEngineer to teams array
        team.push(newEngineer);
        //ask
        wantMore();
    })
};

const wantMore = () => {
    inquirer.prompt([{
        type: "list",
        name: "myPick",
        message: "Who do you want to add to this team?",
        choices: [
            "Intern",
            "Engineer",
            "Please, No More"
        ]
    }]).then((answer) => {
        switch (answer.myPick) {
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                noMore();
                break;
        }
    });
}

const noMore = () => {
    fs.writeFileSync(path.join(__dirname, "output/team.html"), render(team), "utf8");
}

const render = (teams) => {
    const employeeCardArrayOfTemplates = teams.map((employee) => {
        switch (employee.getRole()) {
            case "Manager":
                return `
                <div class="card shadow bg-primary text-white" style="width: 18rem;">             
                <div class="card-body bg-primary text-white">
                  <h4 class="card-title">${employee.getName()}</h4>
                  <h6 class="card-text">Manager</h6>
                </div>
                <ul class="list-group text-dark">
                  <li class="list-group-item">ID: ${employee.getId()}</li>
                  <li class="list-group-item">
                  <a href="mailto:${employee.getEmail()}" class="card-link">Email: ${employee.getEmail()}</a>
                  </li>
                
                  <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
                </ul>
                </div>      
                `;
            case "Intern":
                return `
                <div class="card bg-primary text-white" style="width: 18rem;">             
                <div class="card-body bg-primary text-white">
                  <h4 class="card-title">${employee.getName()}</h4>
                  <h6 class="card-text">Intern</h6>
                </div>
                <ul class="list-group text-dark">
                  <li class="list-group-item">ID: ${employee.getId()}</li>
                  <li class="list-group-item">
                  <a href="mailto:${employee.getEmail()}" class="card-link">Email: ${employee.getEmail()}</a>
                  </li>                
                  <li class="list-group-item">School: ${employee.getSchool()}</li>
                </ul>
                </div>   
                `;
            case "Engineer":
                return `
                <div class="card shadow-sm bg-primary text-white" style="width: 18rem;">             
                <div class="card-body shadow-sm bg-primary text-white">
                  <h4 class="card-title">${employee.getName()}</h4>
                  <h6 class="card-text">Engineer</h6>
                </div>
                <ul class="list-group text-dark">
                  <li class="list-group-item">ID: ${employee.getId()}</li>
                  <li class="list-group-item">
                  <a href="mailto: ${employee.getEmail()}" class="card-link">Email: ${employee.getEmail()}</a>
                  </li>
                
                  <li class="list-group-item">
                    <a href="https://github.com/${employee.getGithub()}" class="card-link">GitHub: ${employee.getGithub()}</a>
                  </li>
                </ul>
                </div>
              
                `;
            default:
                break;
        }
    });

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css" />
    </head>    
    <body>
        <div class="jumbotron text-center">
            <h1 class="display-4">My Awesome Team</h1>
            <p class="lead">Meet the team that makes everything possible!</p>
        </div>
        <div class="container"> 
            <div class="card-deck">
                ${employeeCardArrayOfTemplates.join("")}
            </div>
        </div>
    </body>
    </html>
    `
}

createManager();