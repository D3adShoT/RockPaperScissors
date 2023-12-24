let userScore=0;
let compScore=0;
let uscore = document.getElementById("uscore");
let cscore = document.getElementById("cscore");

console.log('Haakncaksjkca');
let choices = document.querySelectorAll(".choice");
let curRes = document.querySelector(".cur-result");
console.dir(choices);
//4. won actions 
const userWon = ()=>{
    userScore+=1;
    curRes.classList.add('success');
    curRes.classList.remove('failure');
    curRes.innerText = "Congratulation! You Won";
    uscore.innerText =userScore;

};
//5. Lost actions
const userLost =()=>{
    compScore+=1;
    curRes.classList.add('failure');
    curRes.classList.remove('success');
    curRes.innerText = "Ahhh! Tough one";
    cscore.innerText=compScore;
};
//3. generate a random input as computer's choice
const generateRandomChoice = ()=>{
    console.log('random called');
    let output = Math.floor(Math.random()*3);
    console.log('Le output -',output);
    return output;
};

//2.determining who won. 
const playChoice = (userOpt)=>{
    const allChoice = ['rock','paper','scissor'];
    let compChoiceIndex = generateRandomChoice();
    const compChoice = allChoice[compChoiceIndex];
    console.log('computer chooses --> ',compChoice);
    if(userOpt !== compChoice){
        if((userOpt === 'rock' && compChoice === 'scissor')||(userOpt === 'paper' && compChoice === 'rock')||(userOpt === 'scissor' && compChoice === 'paper')){
            userWon();
        }else{
            userLost();
        }
    }   
};

//1. adding event listener to whenever either of the option is clicked
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.dir(choice);
        const uChoice = choice.getAttribute("id");
        console.log('User Opted ->',uChoice);
        playChoice(uChoice);
    });
});
