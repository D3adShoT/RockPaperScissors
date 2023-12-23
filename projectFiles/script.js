let userScore=0;
let compScore=0;
console.log('Haakncaksjkca');
let choices = document.querySelectorAll(".choice");
let curRes = document.querySelector(".cur-result");
console.dir(choices);

const userWon = ()=>{
    userScore+=1;
    curRes.classList.add('success');
    curRes.classList.remove('failure');
    curRes.innerText = "Congratulation! You Won";
};
const userLost =()=>{
    compScore+=1;
    curRes.classList.add('failure');
    curRes.classList.remove('success');
    curRes.innerText = "Ahhh! Tough one";
};

const generateRandomChoice = ()=>{
    return Math.floor(math.random()*3);
};
const playChoice = (userOpt)=>{
    const allChoice = ['rock','paper','scissor'];
    let compChoiceIndex = generateRandomChoice();
    const compChoice = allChoice[compChoiceIndex];
    
    if(userOpt !== compChoice){
        if((userOpt === 'rock' && compChoice === 'scissor')||(userOpt === 'paper' && compChoice === 'rock')||(userOpt === 'scissor' && compChoice === 'paper')){
            userWon();
        }else{
            userLost();
        }
    }   
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.dir(choice);
        const uChoice = choice.getAttribute("id");
        console.log('User Opted ->',uChoice);
        playChoice(uChoice);
    });
});
