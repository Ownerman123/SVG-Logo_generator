const inquirer  = require("inquirer");
const Circle = require('./lib/Circle.js');
const Square = require('./lib/Square.js');
const Bestagon = require('./lib/Bestagon.js');
const Triangle = require('./lib/Triangle.js');
const fs = require('fs');

const questions = [
    {
        type: 'confirm',
        name: 'sure',
        message: "want to create a logo?",
        default: false

    },{
        type: 'list',
        name: 'shape',
        message: 'What shape do you want your logo?',
        choices: ['Triangle', 'Circle','Square','Bestagon'],
        default: 'Circle',
        when: (answers) => { return answers.sure;}
    },{
        type: 'input',
        name: 'border',
        message: 'What color do you want the Border?(hex or color Keyword)',
        default: undefined,
        when: (answers) => { return answers.sure;}
    },{
        type: 'input',
        name: 'color',
        message: 'What color do you want the fill?(hex or color Keyword)',
        default: undefined,
        when: (answers) => { return answers.sure;}
    },{
        type: 'input',
        name: 'text',
        message: 'What text?(No more than 3 characters)',
        default: undefined,
        validate: (text) => {
            
            if(text.length > 3 ) {
              return 'Please no more than three characters';
            }
      
            return true;
          },
          when: (answers) => { return answers.sure;}
    },{
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text?(hex or color Keyword)',
        default: 'black',
        when: (answers) => { 
            if(!answers.sure){return false;} else if (answers.text){return true;}else{return false;}}
    },
 ];

    inquirer.prompt(questions).then((data) => {

        if(data.sure){
        let shape;

    switch (data.shape) {
        case 'Triangle':
            shape = new Triangle();
        break;
        case 'Circle':
            shape = new Circle();
        break;
        case 'Square':
            shape = new Square();
        break;
        case 'Bestagon':
            shape = new Bestagon();
            break;
    
        default:
    
            break;
    }   
    
    shape.setColor(data.color);
    shape.setBorderColor(data.border);
    shape.setText(data.text);
    shape.setTextColor(data.textColor);

    return {svg: shape.render(), filename: shape.text};
}else{return "ok then";}

}

).then((data)=> 
fs.writeFile( `./examples/${data.filename}.svg`,data.svg, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })); 


    
// inquirer
//   .prompt(quest)
//   .then((response) =>
//     console.log(colors[response.color](response.text))
//   );