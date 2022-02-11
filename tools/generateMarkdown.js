// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      return "https://img.shields.io/badge/Licence-MIT-brightgreen";
    case "Apache 2.0":
      return "https://img.shields.io/badge/Licence-APACHE%202.0-brightgreen";
    case "GPL 3.0":
      return "https://img.shields.io/badge/Licence-GPL%203.0-brightgreen";
    case "BSD 3":
      return "https://img.shields.io/badge/Licence-BSD%203-brightgreen";
    case "none":
      return "https://img.shields.io/badge/Licence-None-brightgreen";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return ('[License: MIT](https://opensource.org/licenses/MIT)');
    case 'GNU GPLv3':
      return '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return '[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost 1.0':
      return '[License: Boost 1.0](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Unlicense':
      return '[License: Unlicense](http://unlicense.org/)';
}};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate README
function writeFile(data) {
const licenseIcon = renderLicenseBadge(data.license);
// Return data and generate readme file
return `# ${data.title}
## ${data.name} 

## License:
![${data.license}](${licenseIcon})

---

## Contents:
- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [Contributor](#contribution)
- [License](#license)

---

## Motivation
${data.motivation}

---

## Installation:
- ${data.step1}
- ${data.step2}
- ${data.step3}
- ${data.step4}

---

## Link
Webpage link and resource are provided to further check and test.

* Webpage Link
https://${data.webpageLink}

* Resource Link
https://${data.resourceLink}

---


## Contributor(s)

- ${data.name} - ${data.email}

---

## License

### © ${data.name}, ${data.year}`};

module.exports = writeFile;
