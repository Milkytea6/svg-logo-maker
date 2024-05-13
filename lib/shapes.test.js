const { Shapes, Square, Circle, Triangle } = require('./shapes.js');

describe('Shapes', () => {
    describe('square', () => {
        it('should take the parameters of shapes and make a svg logo of a red square with white text reading "PHI"', () => {

            const squareLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200"  fill="red" />
            <text x="100" y="115" font-size="60" text-anchor="middle" font-weight="bold" fill="white">PHI</text>
            </svg>`;
            const logoClass = new Square();
            expect(logoClass.render('PHI', 'white', 'Square', 'red').match(squareLogo));
        });
    });
    describe('circle', () =>  {
        it('should take the parameters of the input and create a circle that does not match this value.', () => {
            const circleLogo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200"  fill="blue" />
            <text x="100" y="115" font-size="60" text-anchor="middle" font-weight="bold" fill="red">RED</text>
            </svg>`;
            const logoClass = new Circle();
            expect(logoClass.render('NOT', 'red', 'Circle', 'blue')).not.toEqual(circleLogo);
        })
    })
    describe('triangle', () => {
        it('when the color is set to blue for a triangle shape, the render functin should return code the matches.',() => {
            const shape = new Triangle();
            expect(shape.render(undefined, undefined, undefined, 'blue')).toContain('points="150, 18 244, 182 56, 182"', 'fill="blue"');
        })
    })
});