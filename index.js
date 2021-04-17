const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./lib/generateHtml');


//global variables
const teamArray = [];


const init = () => {

console.log(`
Welcome to Team Creator
-----------------------
Developed by JTD
GitHub profile: JoshTDesign

`)

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
        .then(answer => {
            const thisEmployee = new Manager(answer.name, Math.floor(Math.random()*1000), answer.email, answer.phone);
            teamArray.push(thisEmployee);
            console.log('Added.');
            buildTeam(); 
        })
}

const buildTeam = () => {
    inquirer
        .prompt([
            {
                name:'position',
                type:'list',
                choices:['Engineer', 'Intern', 'Done'],
                message: 'What role would you like to add?'
            }
        ])
        .then(answer => {
            switch (answer.position) {
                case 'Engineer':
                    engineerOnboard();
                    break;
                case 'Intern':
                    internOnboard();
                    break;
                case 'Done':
                    for (let i = 0; i < teamArray.length; i++) {
                        if (teamArray[i].getRole() === 'Manager') {
                            console.log(makeManagerCard(teamArray[i]));
                        } else if (teamArray[i].getRole() === 'Engineer') {
                            console.log(makeEngineerCard(teamArray[i]));
                        } else {
                            console.log(makeInternCard(teamArray[i]));
                        }
                    };
                    break;
                default:
                    init();
            }
        })
}

const viewSaved = () => {
    console.log('viewSaved started');
}

const makeManagerCard = (data) => {
    return `
        <div>
            <h1>${data.name}</h1>
        </div>
    `
}
const makeEngineerCard = (data) => {
    return `
        <div>
            <h1>${data.name}</h1>
        </div>
    `
}
const makeInternCard = (data) => {
    return `
        <div>
            <h1>${data.name}</h1>
        </div>
    `
}


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

const renderTeam = () => {
    console.log(teamArray);
    fs.writeFile('team.html', 'test', (err) => {
        if (err) throw err; })
}



init();

