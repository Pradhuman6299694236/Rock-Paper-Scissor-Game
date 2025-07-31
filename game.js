let userChoice
let compChoice
let compCount=0, userCount=0, tieCount=0;
let result = 0;

let getCompChoice = () =>{
    let choices = ["rock", "paper", "scissor"];
    let Index = Math.floor(Math.random()*3);
    compChoice = choices[Index];
}
let playGame = (userChoice, compChoice) =>{
    if(userChoice===compChoice){
        return "Match tie";
    }
    else if(((userChoice==="rock")&&(compChoice==="paper"))||((userChoice==="paper")&&(compChoice==="scissor"))||((userChoice==="scissor")&&(compChoice==="rock"))){
        return "You lose";
    }
    else if(((userChoice==="rock")&&(compChoice==="scissor"))||((userChoice==="paper")&&(compChoice==="rock"))||((userChoice="scissor")&&(compChoice==="paper"))){
         return "You win";
    }
    
}
let score = ()=>{
    if(result==="You lose"){
        compCount++;
    }
    else if(result==="You win"){
        userCount++;
    }
    else{
        tieCount++;
    }
}
let uscore = document.querySelector("#user");
let cscore = document.querySelector("#comp");
let tscore = document.querySelector("#tie");


let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        userChoice = choice.getAttribute("id");
        getCompChoice();
        result = playGame(userChoice, compChoice);
        msg.innerText = result;
        score();
        uscore.innerHTML = userCount;
        cscore.innerHTML = compCount;
        tscore.innerHTML = tieCount;
    })
});



