function game(){
    for(let i = 0; i<5 ; i++){
        function getComputerChoice(){
        let computer =Math.floor(Math.random() * 3 + 1);
        if(computer===1){
            computer="rock";
            return computer;
        }
    
        else if(computer===2){
            computer="paper";
            return computer;
        }
        
        else if(computer===3){
            computer="scissor";
            return computer;
        }
    }
    let player = prompt("rock / paper / scissor ?").toLowerCase();
    let computer = getComputerChoice();
    
    function round(){
        let result = computer ===  player ? "tie game!"
        : computer==="rock" && player==="scissor"? "computer wins"
        : computer==="paper" && player==="rock"? "computer wins"
        : computer==="scissor" && player==="paper"? "computer wins"
        : "player wins!";
        return result
    }
    
    console.log(`player chose ${player}`)
    console.log(`computer chose ${computer}`)
    console.log(round())
    }
}
console.log(game())