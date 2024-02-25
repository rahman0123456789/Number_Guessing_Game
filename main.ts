// Number Guessing Game in typescript.

import inquirer from "inquirer";
do{

    const user = await inquirer.prompt({

        type: "number",
        name: "Num",
        message: "Enter a Number : "
    });
    
    let generaterandomNumber = Math.floor(Math.random()*100);
    
    if(user.Num === generaterandomNumber){
    
        console.log("Congratulations You guessed the number.");
    }
    
    else if(user.Num > generaterandomNumber){
    
        console.log(`${user.Num} is higher then ${generaterandomNumber}`);
    }
    
    else if(user.Num < generaterandomNumber){
    
        console.log(`${user.Num} is lower then ${generaterandomNumber}`);
    }
    
    else{
    
        throw new Error("Invalid Number.")
    }
    
}

while(true);

