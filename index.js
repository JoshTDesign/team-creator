const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

