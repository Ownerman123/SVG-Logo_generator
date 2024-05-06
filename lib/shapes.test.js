const Circle = require('./Circle.js');
const Square = require('./Square.js');
const Bestagon = require('./Bestagon.js');
const Triangle = require('./Triangle.js');

describe('shapes', () => {
    describe('Circle', () => {
        it('should create a circle with a blue boarder and red fill with white tes text', () => {
            const correct = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg " width="300" height="300"><circle cx="100" cy="100" r="80" fill="red" stroke="blue"/><text x="100" y="115" font-size="60" text-anchor="middle" fill="white" >tes</text></svg>`;
            const circle =  new Circle();
            circle.setColor('red');
            circle.setBorderColor('blue');
            circle.setTextColor('white');
            circle.setText('tes')
            console.log(circle.render());
            expect(circle.render()).toEqual(correct);
        });
      
    } );
    describe('Square', () => {
        it('should create a Square with a blue boarder and red fill with white tes text', () => {
            const correct = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg " width="300" height="300"><rect x="50" y="5" rx="10" ry="10" width="200" height="200" stroke="blue" stroke-width="5" fill="red"/><text x="150" y="135" font-size="100" text-anchor="middle" fill="white" >tes</text></svg>`;
            const square =  new Square();
            square.setColor('red');
            square.setBorderColor('blue');
            square.setTextColor('white');
            square.setText('tes')
            console.log(square.render());
            expect(square.render()).toEqual(correct);
        });
      
    } );
    describe('Triangle', () => {
        it('should create a Triangle with a blue boarder and red fill with white tes text', () => {
            const correct = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg " width="300" height="300"><polygon  stroke-width="8" fill="red" stroke="blue" points=" 150,15 290,295 5,290"/><text x="150" y="270" font-size="100" text-anchor="middle" fill="white" >tes</text></svg>`;
            const triangle =  new Triangle();
            triangle.setColor('red');
            triangle.setBorderColor('blue');
            triangle.setTextColor('white');
            triangle.setText('tes')
            console.log(triangle.render());
            expect(triangle.render()).toEqual(correct);
        });
      
    } );
    describe('Bestagon', () => {
        it('should create a Bestagon with a blue boarder and red fill with white tes text', () => {
            const correct = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg " width="300" height="300"><polygon stroke-width="8" fill="red" stroke="blue" points=" 80,15 220,15 295,150  220,286 80,285 5,150"/><text x="150" y="180" font-size="120" text-anchor="middle" fill="white" >tes</text></svg>`;
            const bestagon =  new Bestagon();
            bestagon.setColor('red');
            bestagon.setBorderColor('blue');
            bestagon.setTextColor('white');
            bestagon.setText('tes')
            console.log(bestagon.render());
            expect(bestagon.render()).toEqual(correct);
        });
      
    } );

})