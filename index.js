const inquirer  = require("inquirer");
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

        
console.log(data);
}

);


    
// inquirer
//   .prompt(quest)
//   .then((response) =>
//     console.log(colors[response.color](response.text))
//   );