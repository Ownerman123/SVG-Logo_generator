const SVGShape = require('./shapes.js');

class Bestagon extends SVGShape{
    constructor(){
        super();
    }
    render(){
        this.shapeEl = `<polygon stroke-width="8" fill="${this.color}" stroke="${this.borderColor}" points=" 80,15 220,15 295,150  220,286 80,285 5,150"/>`
    this.textEl = `<text x="150" y="180" font-size="120" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>`
    const svg = this.createSVG();
        return svg;
    }

}

module.exports = Bestagon;