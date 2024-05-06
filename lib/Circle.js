const SVGShape = require('./shapes.js');

class Circle extends SVGShape{
    constructor(){
        super();
    }
    render(){

        this.shapeEl = ` <circle cx="100" cy="100" r="80" fill="${this.color}" stroke="${this.borderColor}"/>`
        this.textEl = `<text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}" >${This.text}</text>`
        const svg = this.createSVG();
        return svg;
    }
}

module.exports = Circle;