const SVGShape = require('./shapes.js');

class Square extends SVGShape{
    constructor(){
        super();
    }
    render(){
        this.shapeEl = `<rect x="50" y="5" rx="10" ry="10" width="200" height="200" stroke="${this.borderColor}" stroke-width="5" fill="${this.color}"/>`
        this.textEl = `<text x="150" y="135" font-size="100" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>`
        const svg = this.createSVG();
        return svg;
    }
    
}

module.exports = Square;