// required imports for this js file
const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const { Square, Circle, Triangle } = require('./lib/shapes');



// an array of prompt for the logo
const logoPrompts = [
    {
        type: 'input',
        name: 'characters',
        message: (colors.brightBlue('Enter three characters that you would inside your logo.'))
    },
    {
        type: 'input',
        name: 'textColor',
        message: (colors.brightMagenta('Enter the color of the characters inside your logo.'))
    },
    {
        type: 'list',
        name: 'shape',
        message: (colors.brightGreen('Enter the shape of your logo')),
        choices: ['Square', 'Circle', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: (colors.brightRed('Enter the color of the shape'))
    }
];

inquirer
    .prompt(logoPrompts)

    .then((response) => {
        // Switch statment to choose the correct class to run the render().
        switch (response.shape) {
            case 'Square':
                logoClass = new Square(response.characters, response.textColor, response.shape, response.shapeColor);
                break;
            case 'Circle':
                logoClass = new Circle(response.characters, response.textColor, response.shape, response.shapeColor);
                break;
            case 'Triangle':
                logoClass = new Triangle(response.characters, response.textColor, response.shape, response.shapeColor);
                break;
            default:
                console.log('Invaild Shape');
        }
        console.log(logoClass);
        const svgCode = logoClass.render(response);
        if (svgCode) {



            // appends new svg file to the folder
            fs.writeFile('logo.svg', svgCode, (err) =>
                err ? console.log(err) : console.log('Generated logo.svg')
            );
        }
        else {
            console.log("Error: svgCode is returning falsy");
        }
    });

// Code to implement a unique name for each svg file

// folder path for the logos
// const path = require('path');
// const folderPath = 'generated-logos';

// Allows the svg file to have a semi-unique name and be saved in a folder with other svg files.
// const fileName = `${response.shapeColor}-${response.shape}-${response.characters}.svg`;
// const filePath = path.join(folderPath, fileName);










