// create dependencies/requirements
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFiles = util.promisify(fs.writeFile);

// inquirer prompts for each section in the README
const promptsText = function ()  {  
    return inquirer.prompt([
      
{
        type: 'input',
        message: "What is the title of your project?",
        name: 'projectTitle',       
},
      
{
        type: 'input',
        message: 'Write a description of your project:',
        name: 'description',
},
      
{
        type: 'input',
        message: 'Input your user story:',
        name: 'userStory',
},

{
        type: 'input',
        message: 'Please specify the Acceptance Criteria:',
        name: 'acceptanceCriteria',
},
        
{
        type: 'input',
        message: 'Please share how other users can contribute to this project: ',
        name: 'contributions',
},
        
{
        type: 'list',
        choices: [                
            "Apache",
            "GNU",
            "MIT"],
        message: 'Project License:',
        name: 'license',
},

{
        type: 'input',
        message: "GitHub Username: ",
        name: 'gitUser',
},
        
{
        type: 'input',
        message: 'Email Address: ',
        name: 'email',
},
    ]);   
}

// variable for creation of readme string and template literal for creation of README structure and content
const readmeGen = ({
    projectTitle,
    description,
    userStory,
    acceptanceCriteria,
    contributions,
    license,
    gitUser,
    email
    
}) => {
    // badge source https://gist.github.com/tterb/982ae14a9307b80117dbf49f624ce0e8
    let  badgeIcon = "";
    if (license === "APACHE 2.0") {
        badgeIcon = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    };
    if (license === "MIT") {
        badgeIcon = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    };
    if (license === "GNU v3") {
        badgeIcon = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    };

    
    // conditionals for link to licenses
    let licenseText = "";
    if (license === "APACHE 2.0") {
        licenseText = "Apache 2.0: https://choosealicense.com/licenses/apache-2.0/"
    };
    if (license === "MIT") {
        licenseText = "MIT: https://choosealicense.com/licenses/mit/"
    };
    if (license === "GNU v3") {
        licenseText = "GNU v3: https://choosealicense.com/licenses/gpl-3.0/"
    };

// ReadME formatting
    return `
# ${projectTitle}
# ${badgeIcon}
# Description 
### ${description}
* [User Story](#userStory)
* [Usage & Contributions](#Contributions)
* [Acceptance Criteria](#acceptanceCriteria)
* [License](#License)
# User Story
### ${userStory}
# Usage and Contributions
### ${contributions}
# Acceptance Criteria
### ${acceptanceCriteria}
# License
### ${licenseText}
### GitHub User Name: ${gitUser}
### Email: ${email}`
}

// Generate ReadMe Function
const init = () => {
    promptsText().then(response => {
        const readmeFile = readmeGen(response);
        writeFiles("README.md", readmeFile)
            .then(() => console.log("Success"))
            .catch(err => console.log(err));
    });
}

init()