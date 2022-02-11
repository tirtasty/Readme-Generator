// Provide inquirer from npm inquirer
const inquirer = require('inquirer');
// writeFileSync - create new file 
const fs = require('fs');
const writeFile = require('./tools/generateMarkdown');

// Array of questions for user input
const promtUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        message:'What is name of the project?', 
        name: 'title',
    },
    {
      type: 'input',
      message:'Enter your fullname?', 
      name: 'name',
    },
    {
        type: 'list',
        message: 'What licence are you working with?',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'Boost 1.0', 'Unlicense'],
    },
    {
        type: 'input',
        message:'Motivation to build this project?', 
        name: 'motivation',
    },
    {
        type: 'input',
        message:'Write the FIRST step on how to use it', 
        name: 'step1',
    },
    {
        type: 'input',
        message:'Write the SECOND step on how to use it ', 
        name: 'step2',
    },
    {
        type: 'input',
        message:'Write the THIRD step on how to use it ', 
        name: 'step3',
    },
    {
        type: 'input',
        message:'Write the FOURTH step on how to use it ', 
        name: 'step4',
    },
    {
        type: 'input',
        message: 'Input your resource link using this format, https:// ', 
        name: 'resourceLink',
    },
    {
      type: 'input',
      message: 'Input website link using this format, https:// ', 
      name: 'webpageLink',
    },
    {
        type: 'input',
        message: 'Input your email:', 
        name: 'email',
    },
    {
      type: 'input',
      message: 'Input year of production for license:', 
      name: 'year',
    }
    ])
};


// Initialize app function to generate readme file
function init() {
    promtUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync(`${answers.name}_README.md`, writeFile(answers)))
      .then(() => console.log('Successfully wrote Readme File'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
