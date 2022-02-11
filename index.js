// Provide inquirer from npm inquirer
const inquirer = require('inquirer');
// writeFileSync - create new file 
const fs = require('fs');

// Array of questions for user input
const promtUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
          },
          {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
          },
          {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?',
          },
          {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?',
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
          },
          {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
          },
    ])
}

// Function to write README file - structure of the html
const writeToFile = ({ name, location, github, linkedin}) => 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Initialize app function to generate readme file
const init = () => {
    promtUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('Readme.md', writeToFile(answers)))
      .then(() => console.log('Successfully wrote Readme File'))
      .catch((err) => console.error(err));
  };
console.log(inquirer.name);


// Function call to initialize app
init();
