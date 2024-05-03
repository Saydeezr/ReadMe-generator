const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./generate.js');
const { default: Choices } = require('inquirer/lib/objects/choices.js');

const dataEntries = inquirer.prompt([{
    type: 'input',
    message: 'What is the name of this project?',
    name: 'title',
}, {
    type:'input',
    message: 'Give a detailed description of your project',
    name: 'description',
}, {
    type:'input',
    message: 'Are any installations required to run this app?',
    name: 'installation',
}, {
    type:'input',
    message: 'Provide insructions and examples for use:',
    name: 'usage',
}, {
    type:'list',
    message: 'What license is being used?',
    choices: ['Apache','BSD 3-Clause', 'GNU General Public', 'MIT', 'Mozilla Public',],
    name: 'license',
}, {
    type:'input',
    message: 'List your collaborators (if any):',
    name: 'contributions',
}, {
    type:'input',
    message: 'Provide any testing done for this application:',
    name: 'tests',
}, {
    type:'input',
    message: 'What is your Github username?',
    name: 'username',
}, {
    type:'input',
    message: 'What is your email address?',
    name: 'email',
}   
]) //Once completed, create a new file named 'README.md'
.then((data) => { 
    fs.writeFile('README.md', generateReadMe(data), (err) => { 
        if (err) console.error(err)})
})

