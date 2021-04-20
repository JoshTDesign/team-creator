const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


//global variables
const teamArray = [];


const init = () => {


//Logs a welcome message for the user
console.log(`
Welcome to Team Creator
-----------------------
Developed by JTD
GitHub profile: JoshTDesign

`)
    //prompts the user to give information for the manager position
    inquirer
        .prompt([
            {
                name:`name`,
                type:`input`,
                message:`Manager name?`
            },
            {
                name:`email`,
                type:`input`,
                message:`Manager email?`
            },
            {
                name:`phone`,
                type:`input`,
                message:`Manager phone number?`
            }
        ])

        //creates an object for the manager and adds that object to the 'teamArray'. Then calls the buildTeam function.
        .then(answer => {
            const thisEmployee = new Manager(answer.name, Math.floor(Math.random()*1000), answer.email, answer.phone);
            teamArray.push(thisEmployee);
            console.log('Added.');
            buildTeam(); 
        })
}


//function that contains loop for adding new team members
const buildTeam = () => {
    inquirer
        //prompts user for which position to add first
        .prompt([
            {
                name:'position',
                type:'list',
                choices:['Engineer', 'Intern', 'Done'],
                message: 'What role would you like to add?'
            }
        ])
        //calls for inquirer questions based on response to 'position' prompt. Calls the htmlBuild function when 'done'.
        .then(answer => {
            switch (answer.position) {
                case 'Engineer':
                    engineerOnboard();
                    break;
                case 'Intern':
                    internOnboard();
                    break;
                case 'Done':
                    buildHtml();    
                    break;
                default:
                    init();
            }
        })
}

//Function that puts together all card html snippets once the user chooses 'done'
const buildHtml = () => {
    let htmlContent = '';
    let htmlHead = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./lib/style.css">
    <title>Team</title>
</head>

<body>
    <header>
        <h1>Team Creator</h1>
    </header>  
    <main>
        <div class="container">
`;
    for (let i = 0; i < teamArray.length; i++) {
        if (teamArray[i].getRole() === 'Manager') {
            htmlContent = htmlContent.concat(makeManagerCard(teamArray[i]));
        } else if (teamArray[i].getRole() === 'Engineer') {
            htmlContent = htmlContent.concat(makeEngineerCard(teamArray[i]));
        } else {
            htmlContent = htmlContent.concat(makeInternCard(teamArray[i]));
        }
    };

    const htmlFoot = `
    </div>
    </main>  
    <footer><p>Created with love by JTD</footer>
</body>
</html>
    `
    let fullHtml = htmlHead + htmlContent + htmlFoot;
    writeToFile('team', fullHtml);
}


const writeToFile = (filename, data) => {
        fs.writeFile(filename + '.html', data, (err) => 
        err ? console.error(err) : console.log('Your team page has been created!')
        );
    };


//Generates html code for Manager cards
const makeManagerCard = (data) => {
    return `
        <div class="card" id="manager">
            <div id="managerHead">
                <img src="./lib/ManagerSVG.svg" width="40px"> 
                <div>
                    <h1>${data.name}</h1>
                    <h2>Manager</h2>
                </div>
            </div>

            <p><span>e-mail: </span><a href="mailto:${data.email}">${data.email}</a></p>
            <p><span>phone: </span>${data.phone}</p>
            <p><span>ID: </span>${data.id}</p>
        </div>
    `
}

//Generates html code for Engineer cards
const makeEngineerCard = (data) => {
    return `
        <div class="card" id="engineer">
            <div id="engineerHead">
                <img src="./lib/EngineerSVG.svg" width="40px"> 
                <div>
                    <h1>${data.name}</h1>
                    <h2>Engineer</h2>
                </div>
            </div>
            <p><span>e-mail: </span><a href="mailto:${data.email}">${data.email}</a></p>
            <p><span>gitHub profile: </span><a href="http://www.github.com/${data.github}">${data.github}</a></p>
            <p><span>ID: </span>${data.id}</p>
        </div>
    `
}

//Generates html code for Intern cards
const makeInternCard = (data) => {
    return `
        <div class="card" id="intern">
            <div id="internHead">
                <img src="./lib/InternSVG.svg" width="40px"> 
                <div>
                    <h1>${data.name}</h1>
                    <h2>Intern</h2>
                </div>
            </div>
            <p><span>e-mail: </span><a href="mailto:${data.email}">${data.email}</a></p>
            <p><span>school: </span>${data.school}</p>
            <p><span>ID: </span>${data.id}</p>
        </div>
    `
}

//Prompts user for new engineer info
const engineerOnboard = () => {
    inquirer
    .prompt([
        {
            name:`name`,
            type:`input`,
            message:`Engineer name?`
        },
        {
            name:`email`,
            type:`input`,
            message:`Engineer email?`
        },
        {
            name:`github`,
            type:`input`,
            message:`GitHub profile name?`
        }
    ])
    .then(answer => {
        //Takes the answers to the questions and builds a new object for the employee and adds it to the teamArray.
        const thisEmployee = new Engineer(answer.name, Math.floor(Math.random()*1000), answer.email, answer.github);
        teamArray.push(thisEmployee);
        console.log('Added.');
        inquirer
            .prompt([
                {
                name:'another',
                type:'list',
                choices:['yes', 'no'],
                message:'Add another engineer?'
                }
            ])
            .then(answer => {
                if (answer.another == 'yes') {
                    engineerOnboard();
                } else {
                    buildTeam();
                }
            })
    })
}

//Prompts user for new intern info
const internOnboard = () => {
    inquirer
    .prompt([
        {
            name:`name`,
            type:`input`,
            message:`Intern name?`
        },
        {
            name:`email`,
            type:`input`,
            message:`Intern email?`
        },
        {
            name:`school`,
            type:`input`,
            message:`Intern school?`
        }
    ])
    //Takes the answers to the questions and builds a new object for the employee and adds it to the teamArray.
    .then(answer => {
        const thisEmployee = new Intern(answer.name, Math.floor(Math.random()*1000), answer.email, answer.school);
        teamArray.push(thisEmployee);
        console.log('Added.');
        inquirer
            .prompt([
                {
                name:'another',
                type:'list',
                choices:['yes', 'no'],
                message:'Add another intern?'
                }
            ])
            .then(answer => {
                if (answer.another == 'yes') {
                    internOnboard();
                } else {
                    buildTeam();
                }
            })
    })
}

//writes complete html to the team.html file
const renderTeam = () => {
    console.log(teamArray);
    fs.writeFile('team.html', 'test', (err) => {
        if (err) throw err; })
}

//Starts functions to begin program
init();

