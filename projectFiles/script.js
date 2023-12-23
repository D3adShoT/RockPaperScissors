let userScore=0;
let compScore=0;
console.log('Haakncaksjkca');
let choices = document.querySelectorAll(".choices");
console.dir(choices);
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const uChoice = choice.getAttribute("id");
        console.log('User Opted ->',uChoice);
    });
});
