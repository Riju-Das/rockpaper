const rock= document.querySelector(".rock")
const scissor= document.querySelector(".scissor")
const paper=document.querySelector(".paper")
const inputbox= document.querySelector(".inputbox")
const humanoutput = document.querySelector("#humanoutput")
const gameoutput= document.querySelector("#gameoutput")
const computeroutput = document.querySelector("#computeroutput")


function getComputerChoice(){

    let a=Math.floor(Math.random()*3)
    if(a==0){
        return "rock";
    }
    else if(a==1){
        return "paper";
    }
    else{
        return "scissor";
    }
}




function playround(humanschoice,computerchoice){
    if((humanschoice=="rock" && computerchoice=="paper") || (humanschoice=="scissor" && computerchoice=="rock") || (humanschoice=="paper" && computerchoice=="scissor")  ){
        roundresult =("You lose! "+ computerchoice+  " beats "+ humanschoice)
        // computerscore+=1
    }
    else if((humanschoice=="rock" && computerchoice=="scissor") || (humanschoice=="paper" && computerchoice=="rock") || (humanschoice=="scissor" && computerchoice=="paper") ){
        roundresult =("You Win! "+ humanschoice +" beats "+computerchoice)
        // humanscore+=1
    }
    else{
        roundresult= ("Its a draw! both chose "+ humanschoice)
    }
}
function playgame(){

    console.log(humanchoice)
    computerselection= getComputerChoice()
    let humanselection = humanchoice
    playround(humanselection,computerselection)
    
    humanscreen();
    computerscreen();
    gamescreen();

}
function humanscreen(){

    const youchose= document.createElement("p");
    const choosing = document.createElement("p")
    youchose.textContent = "You Chose:";
    choosing.textContent= humanchoice;
    youchose.setAttribute("class", "Choose")
    choosing.setAttribute("class", "Choose")

    humanoutput.appendChild(youchose)
    humanoutput.appendChild(choosing)
}

function computerscreen(){
    const compchose= document.createElement("p");
    const compchoosing = document.createElement("p")
    compchose.textContent = "Computer Chose:";
    compchoosing.textContent= computerselection;
    compchose.setAttribute("class", "Choose")
    compchoosing.setAttribute("class", "Choose")

    computeroutput.appendChild(compchose)
    computeroutput.appendChild(compchoosing)
    console.log(computerselection)
}

function gamescreen(){
    const gamechose= document.createElement("p");
    const gamechoosing = document.createElement("p")
    gamechose.textContent = "Results: "
    gamechoosing.textContent= roundresult;
    gamechose.setAttribute("class", "Choose")
    gamechoosing.setAttribute("class", "Choose")


    if(roundresult==("Its a draw! both chose "+ humanchoice)){
        gamechoosing.setAttribute("class","whitecolor");
    }
    else if(roundresult ==("You lose! "+ computerselection+  " beats "+ humanchoice)){
        gamechoosing.setAttribute("class","redcolor")
    }
    else{
        gamechoosing.setAttribute("class","greencolor")
    }
    gameoutput.appendChild(gamechose)
    gameoutput.appendChild(gamechoosing)
}


let computerselection;
let humanchoice;

inputbox.addEventListener("click", (event)=>{
    humanoutput.innerHTML="";
    computeroutput.innerHTML=""
    gameoutput.innerHTML=""
    
    let target = event.target;
    switch(target.id){
        case "rock":
            humanchoice= "rock";
            break;
        case "paper":
            humanchoice= "paper";
            break;
        case "scissor":
            humanchoice= "scissor";
            break;                 
    }
    playgame()

})





// let humanscore=0;
// let computerscore=0;
// console.log("The score is: ")
// console.log("human: "+ humanscore +" computer "+ computerscore)
// if(humanscore>computerscore){
//     console.log("The winner is the human")

// }
// else if(humanscore==computerscore){
//     console.log("The match is a draw!")
// }
// else{
//     console.log("The winner is the computer")
// }