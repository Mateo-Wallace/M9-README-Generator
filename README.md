<p id="readme-top"></p>

[![License Badge](https://img.shields.io/badge/license-MIT-success?style=plastic)](https://choosealicense.com/licenses/mit/)

# M9-README-Generator

## Description:
This project was built using Node.js in order to write a quality README.md using the command line. It serves as an introduction to using JavaScript without the browser.

While building this project I learned to:

- Initialize node using `npm init -y`
- Load a third party module using `npm i <third-party-title-here>`
- Use [fs](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html) core module to write a new file
- Use [inquirer](https://www.npmjs.com/package/inquirer) third party module to `.prompt` questions in the command line
- Reference a variable within a string - *Ex. `'This is a string ${data.thisIsAnInput}'`*

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## Installation

1. Clone the repo down to your local machine by clicking the `code` button on this repo and copying the `SSH Key`. Using the terminal, navigate to your desired save location and use the command `git clone <SSH Key>`. Open the local repo using your preffered code editor.
2. If you don't have Node.js already installed on your machine, navigate to [nodejs.org](https://nodejs.org/en/) and download 16.18.0 or LTS.
3. Open the directory in your terminal and run `npm i` in order to download [inquirer](https://www.npmjs.com/package/inquirer).

## Usage

1. Open your terminal, and in the command line run `node index.js`
2. On the top left you will see an input tab. Type in a Video Game. The web app will run your search and find the top Steam result. Be SPECIFIC. Sometimes the top Steam result won't be the game you wanted. *Example: Halo vs. Halo 3*
3. This will display from top to bottom: game information, game price, an image of the game as a clickable button, 3 Steam news results as clickable buttons, 3 Youtube news results as a clickable button.
4. Click on any of the hoverable displays to be directed to the article or video of your choosing.
5. Whether you refresh the page or not. The Last Search button should now call your last search by calling from local storage.

For more information please reference our [Google Slides Presentation](https://docs.google.com/presentation/d/1iWw3ddFPG-bwmLspDSL5NkOq9GdobFoOh4RRxNbCWVE/edit#slide=id.g16c67861f1b_0_25).

## Credits

### Collaborators

Andrew Gibbs: [GitHub - AndrewPGibbs](https://github.com/AndrewPGibbs)

Mateo Wallace: [GitHub - Mateo-Wallace](https://github.com/Mateo-Wallace)

Jose Leyva: [GitHub - ProNevros](https://github.com/ProNevros)

Noel Stafford: [GitHub - NoelStafford](https://github.com/NoelStafford)

### Third Party Assets

Glavier. (2022, October 5). YouTube API Documentation. RapidAPI. Retrieved October 18, 2022, from https://rapidapi.com/Glavier/api/youtube138/ 

Imgur. (2018, January 2). Only the COMFIEST pixels for you: Dark souls art. Pinterest. Retrieved October 18, 2022, from https://www.pinterest.com/pin/131589620347129803/ 

Sima, P. (2021). Steam API documentation. RapidAPI. Retrieved October 18, 2022, from https://rapidapi.com/psimavel/api/steam2 

Wathan, A. (n.d.). Rapidly build modern websites without ever leaving your HTML. Tailwind CSS. Retrieved October 18, 2022, from https://tailwindcss.com/ 

## License

MIT License

Copyright (c) 2022 Mateo Wallace

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Technology

<p float="left">
  <img src="./assets/images/html.png" width="100" />
  <img src="./assets/images/css3.png" width="100" />
  <img src="./assets/images/JavaScript-logo.png" width="100" />
  <img src="./assets/images/tailwindcsslogo-label.png" width="100" />
  <img src="./assets/images/jquery.png" width="100" />
  <img src="./assets/images/markdown-logo.png" width="100" />
</p>

# 09 Node.js Challenge: Professional README Generator

## Your Task

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). Review the [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) as a reminder of everything that a high-quality, professional README should contain. 

The application will be invoked by using the following command:

```bash
node index.js
```

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video _and_ add it to the README of your project.


## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Getting Started

Here are some guidelines to help you get started:

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

* Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

* Refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 

### Deliverables: 20%

* A sample README generated using the application must be submitted.

* Your GitHub repository containing your application code.

### Walkthrough Video: 27%

* A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

	* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality README with description and a link to walkthrough video.


## Review

You are required to submit the following for review:

* A walkthrough video demonstrating the functionality of the application.

* A sample README.md file for a project repository generated using your application

* The URL of the GitHub repository, with a unique name and a README describing the project

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
