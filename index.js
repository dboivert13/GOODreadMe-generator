const inquirer = require('inquirer');

return inquirer.prompt([

  {
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
    
},
    {
      type: 'input',
      message: 'Write a description of your project.',
      name: 'Project Description',
},
    {
      type: 'input',
      message: 'Input your user story.',
      name: 'user story',
},
    {

      type: 'input',
      message: 'What is the Acceptance Criteria for this project?',
      name: 'acceptance criteria',
},
    {
      type: 'input',
      message: 'Organize your readMe file into a Table of contents here:',
      name: 'table of contents',
      
    },
{
      type: 'input',
      message: 'Please share how someone can use your project.',
      name: 'usage',
},
])

