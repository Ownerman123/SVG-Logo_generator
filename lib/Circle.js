const SVGShape = require('./shapes.js');

class Circle extends SVGShape{
    constructor(){
        super();
    }
    render(){

        this.shapeEl = `<circle cx="100" cy="100" r="80" fill="${this.color}" stroke="${this.borderColor}"/>`
        this.textEl = `<text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>`
        const svg = this.createSVG();
        return svg;
    }
}

module.exports = Circle;


//`<svg version="1.1" xmlns="http://www.w3.org/2000/svg " width="300" height="300"><circle cx="100" cy="100" r="80" fill="red" stroke="blue"/> <text x="100" y="115" font-size="60" text-anchor="middle" fill="white" >tes</text></svg>`