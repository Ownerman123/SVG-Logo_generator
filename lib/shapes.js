class SVGShape {
    constructor(){}
    
    setColor(color){
        this.color = color;
    }

    setBorderColor(color){
        this.borderColor = color;
    }

    setText(text){
        this.text = text;
    }

    setTextColor(color){
        this.textColor = color;
    }
    createSVG(){
        let  svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg " width="300" height="300">`;

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





module.exports = SVGShape;