
function playgame(){
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
    
    function gethumanchoice(){
        let a=prompt("Enter ur choice")
        a=a.toLowerCase()
        if(a=="rock"){
            return "rock"
        }
        else if(a=="paper"){
            return "paper"
        }
        else if(a=="scissor"){
            return "scissor"
        }
        else{
            return "Enter a valid choice"
        }
    }
    
    function playround(humanschoice,computerchoice){
        if((humanschoice=="rock" && computerchoice=="paper") || (humanschoice=="scissor" && computerchoice=="rock") || (humanschoice=="paper" && computerchoice=="scissor")  ){
            console.log("You lose! "+ computerchoice+  " beats "+ humanschoice)
            computerscore+=1
        }
        else if((humanschoice=="rock" && computerchoice=="scissor") || (humanschoice=="paper" && computerchoice=="rock") || (humanschoice=="scissor" && computerchoice=="paper") ){
            console.log("You Win! "+ humanschoice +" beats "+computerchoice)
            humanscore+=1
        }
        else{
            console.log("Its a draw! both chose "+ humanschoice)
        }
    }
    const humanselection = gethumanchoice()
    const computerselection= getComputerChoice()

    playround(humanselection,computerselection)
}
let humanscore=0;
let computerscore=0;
playgame()
playgame()
playgame()
playgame()
playgame()
console.log("The score is: ")
console.log("human: "+ humanscore +" computer "+ computerscore)
if(humanscore>computerscore){
    console.log("The winner is the human")

}
else if(humanscore==computerscore){
    console.log("The match is a draw!")
}
else{
    console.log("The winner is the computer")
}