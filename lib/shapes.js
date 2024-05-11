class Shapes {
    constructor(characters, textColor, shape, shapeColor){
        this.characters = characters,
        this.textColor = textColor,
        this.shape = shape,
        this.shapeColor = shapeColor
    }
}
class Square extends Shapes {
    constructor(characters, textColor, shape, shapeColor){
        super(characters, textColor, shape, shapeColor)
    }
    // SVG file parameter specific to making a square
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200"  fill="${this.shapeColor}" />
        <text x="100" y="115" font-size="60" text-anchor="middle" font-weight="bold" fill="${this.textColor}">${this.characters}</text>
        </svg>`
    }
}
class Circle extends Shapes {
    constructor(characters, textColor, shape, shapeColor) {
        super(characters, textColor, shape, shapeColor)     
    }
    // SVG file parameter specific to making a circle
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="125" cy="100" r="60" fill="${this.shapeColor}" />
        <text x="125" y="115" font-size="45" text-anchor="middle" font-weight="bold" fill="${this.textColor}">${this.characters}</text>
        </svg>`
    }
}
// SVG file parameter specific to making a triangle
class Triangle extends Shapes {
    constructor(characters, textColor, shape, shapeColor){
        super(characters, textColor, shape, shapeColor)
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="100" y="100" font-size="60" text-anchor="middle" font-weight="bold" fill="${this.textColor}">${this.characters}</text>
        </svg>`
    }
}
module.exports = { Square, Circle, Triangle };