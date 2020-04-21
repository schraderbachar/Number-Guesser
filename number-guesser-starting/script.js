let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9);

};
//in this fun we compare guesses- user is human guess com is computer gues and targNum is the num they want to get closest to- its random
//the logic is if the user is closer to the targNUm than  the computer (found witht the absolute val) than it returns true indicating the human wins- else computer wins
const compareGuesses = (human, computer, targNum) => {
    const user = Math.abs(targNum - human);
    const computerG = Math.abs(targNum - computer);


    if (user > 0 && user < 10) {
        return user <= computerG;
    } else {
        alert("You didnt pick a number between 0 and 9");

    }
};
//gets the winner and updates the coorelating score
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
        console.log(humanScore);
    } else {
        computerScore++;
        console.log(computerScore);

    }
};

const advanceRound = () => {
    currentRoundNumber++;
};