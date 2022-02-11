// Provide inquirer from npm inquirer
const inquirer = require('inquirer');
// writeFileSync - create new file 
const fs = require('fs');

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

// Function to write README file - structure of the html
const writeToFile = ({ title, name,license, motivation, step1, step2, step3, step4, webpageLink, resourceLink, email, year}) => 
`# ${title}
## ${name} 
---
### License

---


## Contents:
- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [Contributor](#contribution)

---

## Motivation 
// ### Motivation behind the project?
${motivation}

---

## Installation:
- ${step1}
- ${step2}
- ${step3}
- ${step4}

---

Webpage link and resource are provided to further check and test.

* Webpage Link
https://${webpageLink}

* Resource Link
https://${resourceLink}

---


## Contributor(s)

- ${name} - ${email}

---

## © ${name}, ${year}`;

// Initialize app function to generate readme file
const init = () => {
    promtUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('README.md', writeToFile(answers)))
      .then(() => console.log('Successfully wrote Readme File'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
