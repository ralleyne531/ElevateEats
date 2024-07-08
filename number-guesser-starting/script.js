let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
    function generateTarget(){
        return Math.floor(Math.random() * 10);
    }

    function compareGuesses(user,computer,target){
        let usrdst = Math.abs(target - user);
        let compdst = Math.abs(target - computer);
        if(usrdst < compdst || usrdst == compdst || usrdst == 0){
            return true
        }else{
            return false;
        }
    }
    function updateScore(winner){
        if(winner == 'human'){
            humanScore++;
        }else if(winner = "computer"){
            computerScore++;
        }
    }

    function advanceRound(){
        currentRoundNumber++;
    }
