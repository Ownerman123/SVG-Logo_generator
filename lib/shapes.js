class SVGShape {
    
    setColor(color){
        this.color = color;
    }

    setBorderColor(color){
        this.borderColor = color;
    }

    setText(text){
        this.text = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="white">${text}</text>`;
    }

    setTextColor(color){
        this.textColor = color;
    }
    createSVG(){
        let  svg = `<svg>`;

        if(this.shapeEl){
            svg = svg.concat(`${this.shapeEl}`)
        }
        if(this.textEl){
            svg = svg.concat(`${this.textEl}`)
        }

        svg = svg.concat('</svg>');
        return svg;
    }

    render(){
        return new Error('shape must have its own render()')
    }
}
class Circle extends SVGShape{
    render(){

        this.shapeEl = ` <circle cx="100" cy="100" r="80" fill="${this.color}" stroke="${this.borderColor}"/>`
        this.textEl = `<text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}" >${This.text}</text>`
        const svg = this.createSVG();
        return svg;
    }
}
class Triangle extends SVGShape{
    render(){
        this.shapeEl = `<polygon  stroke-width="8" fill="${this.color}" stroke="${this.borderColor}" points=" 150,15 290,295 5,290  "  />`;
        this.text = `<text x="150" y="270" font-size="100" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>        `;
        const svg = this.createSVG();
        return svg;
    }
    
}
class Bestagon extends SVGShape{
    render(){
        this.shapeEl = `<polygon stroke-width="8" fill="${this.color}" stroke="${this.borderColor}" points=" 80,15 220,15 295,150  220,286 80,285 5,150"  />`
    this.text = `<text x="150" y="180" font-size="120" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>`
    const svg = this.createSVG();
        return svg;
    }

}
class Square extends SVGShape{
    render(){
        this.shapeEl = `<rect x="50" y="5" rx="10" ry="10" width="200" height="200" stroke="${this.borderColor}" stroke-width="5" fill="${this.color}"/>`
        this.text = `<text x="150" y="135" font-size="100" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>`
        const svg = this.createSVG();
        return svg;
    }
    
}