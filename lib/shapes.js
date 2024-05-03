class SVGShape {
    constructor(color ,gradient){
        this.color = color;
        this.gradient = gradient
    }
    render(){
        return new Error('shape must have its own renderfunction')
    }
}