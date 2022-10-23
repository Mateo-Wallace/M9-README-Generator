// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `<p id="readme-top"></p>

[![License Badge](https://img.shields.io/badge/license-${data.license}-success?style=plastic)](https://choosealicense.com/licenses/${data.license.toLowerCase()}/)

# ${data.title}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## Installation
${data.installation}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage
${data.usage}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing
${data.contributing}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tests
${data.tests}
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License
Copyright (c) [${data.username}](https://github.com/${data.username}). All rights reserved. 
\nLicensed under the [${data.license} license](https://choosealicense.com/licenses/${data.license.toLowerCase()}/).
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Questions
For any further questions feel free to contact me via:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: [${data.email}](mailto:${data.email})
<p align="right">(<a href="#readme-top">back to top</a>)</p>
`;
}

module.exports = generateMarkdown;