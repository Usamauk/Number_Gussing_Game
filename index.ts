#! /usr/bin/env node
import inquirer from 'inquirer';

const computerNumber = Math.floor(Math.random()* 6 + 1);
const answer = await inquirer.prompt([
    {
        message: "Guess your number Range 1-6:",
        type:"number",
        name:"UserguessNumber",
    }
])

if (answer.UserguessNumber === computerNumber) {
    console.log("Congrulation you win the Game");
}else{
    console.log("you lose the Game Good luck next Time");
    
}