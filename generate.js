function renderBadge(license){
  if (license) {
    // return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}


const generateReadMe = (dataEntries) => {
  return `# ${dataEntries.title}

${renderBadge(dataEntries.license)}

## Description
${dataEntries.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributions](#contributions)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${dataEntries.installation}

## Usage
${dataEntries.usage}

## License
${dataEntries.license}

## Contributions
${dataEntries.contributions}

## Tests
${dataEntries.tests}

## Questions
My GitHub profile is ${dataEntries.username}
For more information, reach me at ${dataEntries.email} 
`
};
module.exports = generateReadMe