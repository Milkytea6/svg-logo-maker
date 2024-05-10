const inquirer = require('inquirer');

// an array of prompt for the logo
const logoPrompts = [
    {
        type: 'input',
        name: 'characters',
        message: 'Enter three characters that you would inside your logo.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color of the characters inside your logo.'
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Enter the shape of your logo'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color of the shape'
    }
];




