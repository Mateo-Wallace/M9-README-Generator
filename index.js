// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your PROJECT TITLE?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please DESCRIBE your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the INSTALLATION INSTRUCTIONS for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the USAGE INFORMATION for your project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Which LICENSE would you like?',
        choices: ["MIT", "Apache", "BSD", "Unlicense"],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What are the CONTRIBUTION GUIDELINES for your project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the TEST INSTRUCTIONS for your project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GITHUB USERNAME?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your EMAIL?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.appendFile('USERREADME.md', data, (err) =>
        err ? console.error(err) : console.log('README file saved as USERREADME.md')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile(generateMarkdown(responses)));
}

// Function call to initialize app
init();