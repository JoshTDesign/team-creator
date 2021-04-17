const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//global variables
const teamArray = [];

//TODO:
const init = () => {
//init is going to call different question loops depending on what is selected at the beginning of the
//question loops will be: Manager, Engineer, Intern,
console.log(`
Welcome to Team Creator
-----------------------
Developed by JTD
GitHub profile: JoshTDesign

`)
inquirer
    .prompt ([
        {
            message: ``,
            type:`list`,
            choices: [`Build a new team`, `View a saved team`],
            name:`begin`
        }
    ])
    .then (answer => {
        switch (answer.begin) {
            case 'Build a new team': 
                buildTeam();
                break;
            case 'View a saved team':
                viewSaved();
                break;
        }
 
    })
}

const buildTeam = () => {
    inquirer
        .prompt([
            {
                name:'position',
                type:'list',
                choices:['Manager', 'Engineer', 'Intern', 'Done'],
                message: 'What role would you like to add?'
            }
        ])
        .then(answer => {
            switch (answer.position) {
                case 'Manager':
                    managerOnboard();
                    break;
                case 'Engineer':
                    engineerOnboard();
                    break;
                case 'Intern':
                    internOnboard();
                    break;
                case 'Done':
                    renderTeam();
                    break;
                default:
                    init();
            }
        })
}

const viewSaved = () => {
    console.log('viewSaved started');
}


const managerOnboard = () => {

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
            inquirer
                .prompt([
                    {
                    name:'another',
                    type:'list',
                    choices:['yes', 'no'],
                    message:'Add another manager?'
                    }
                ])
                .then(answer => {
                    if (answer.another == 'yes') {
                        managerOnboard();
                    } else {
                        buildTeam();
                    }
                })
        })
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
}





init();

