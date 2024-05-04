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

    render(){
        return new Error('shape must have its own render()')
    }
}
class Circle extends SVGShape{
    render(){

        this.shapeEl = ` <circle cx="100" cy="100" r="80" fill="${this.color}" stroke="${this.borderColor}"/>`
        this.textEl = `<text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}" >${This.text}</text>`
    }
}
class Triangle extends SVGShape{
    render(){
        this.shapeEl = ``
    }
}
class Star extends SVGShape{
    render(){
        this.shapeEl = `<polygon stroke-width="1" fill="${this.color}" stroke="${this.bordercolor}" points="100 325 110 360 140 360 120 380 130 410 100 390 70 410 80 380 60 360 90 360" y="" x="150" />`
    }
}
class Square extends SVGShape{
    render(){
        this.shapeEl = `<rect x="50" y="5" rx="10" ry="10" width="200" height="200" stroke="${this.bordercolor}" fill="${this.color}"/>`
    }
}