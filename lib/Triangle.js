const SVGShape = require('./shapes.js');

class Triangle extends SVGShape{
    constructor(){
        super();
    }
    render(){
        this.shapeEl = `<polygon  stroke-width="8" fill="${this.color}" stroke="${this.borderColor}" points=" 150,15 290,295 5,290"/>`;
        this.textEl = `<text x="150" y="270" font-size="100" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>`;
        const svg = this.createSVG();
        return svg;
    }
    
}

module.exports = Triangle;