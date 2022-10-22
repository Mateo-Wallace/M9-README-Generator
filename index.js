// const inquirer = require('inquirer');
// const fs = require('fs');

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: 'What is your user name?',
//             name: 'name',
//         },
//         {
//             type: 'checkbox',
//             message: 'What languages do you know',
//             choices: ["HTML", "CSS", "JS"],
//             name: 'languages',
//         },
//         {
//             type: 'list',
//             message: 'What is your preferred method of communication?',
//             choices: ["LinkedIn", "GitHub", "Twitter"],
//             name: 'communication',
//         },
//     ])
//     .then((response) =>
//         fs.appendFile('info.json', JSON.stringify(response, null, '\t'), (err) =>
//             err ? console.error(err) : console.log('Commit logged!')
//         )
//     );

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
