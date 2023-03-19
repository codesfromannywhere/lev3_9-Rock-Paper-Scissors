console.log("läuft");

let moves = 0
const choosenRounds = document.getElementById("showRounds")
let round = document.getElementsByName('round');

// HOW MANY ROUNDS
const displayRounds = () => {
    for (i = 0; i < round.length; i++) {
        if (round[i].checked) {
            choosenRounds.textContent = round[i].value;
            choosenRounds.style.display = 'none';
            return
        }
    }
}

const fullGame = () => {
    let userScore = 0;
    let computerScore = 0;

    // LETS PLAY
    const playGame = () => {
        // USER Options
        const userOptions = document.querySelectorAll(".options button");

        // COMPUTER Options
        const computerOptions = ["rock", "paper", "scissors"];

        userOptions.forEach(option => {
            option.addEventListener('click', function () {

                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                const countMoves = document.querySelector('.countMoves');
                moves++;
                countMoves.innerText = `${0 + moves} ${"/ "}`.concat(choosenRounds.textContent);

                const usersDisplay = document.querySelector(".usersPick");
                const compsDisplay = document.querySelector(".computersPick");
                usersDisplay.textContent = `${"You picked: "}${this.textContent}`
                compsDisplay.textContent = `${"Comp picked: "}${computerChoice}`

                // CALL BACK WHOWINS()
                whoWins(this.textContent, computerChoice);

                if (round[i].value == 5 && moves == 5) {
                    gameOver(userOptions, countMoves);
                }
                else if (round[i].value == 10 && moves == 10) {
                    gameOver(userOptions, countMoves)
                }
                else if (round[i].value == 20 && moves == 20) {
                    gameOver(userOptions, countMoves)
                }
                else if (round[i].value == 20 && moves == 20) {
                    gameOver(userOptions, countMoves)
                }
            });
        });
    }

    // DEFINE WINNER
    const whoWins = (user, computerChoice) => {
        const text = document.querySelector(".output_text")


        if (user === computerChoice) {
            text.textContent = "A DRAW!"
            text.style.color = 'orange';
            return;
        }

        if (user === "rock") {
            if (computerChoice === "scissors") {
                text.textContent = "YOU WIN!"
                text.style.color = 'green';
                userScore++;
                resultCounter();
                return;
            } else {
                text.textContent = "YOU LOOSE!"
                text.style.color = 'red';
                computerScore++
                resultCounter();
                return;
            }
        }

        if (user === "paper") {
            if (computerChoice === "scissors") {
                text.textContent = "YOU LOOSE"
                text.style.color = 'red';
                computerScore++
                resultCounter();
                return;
            } else {
                text.textContent = "YOU WIN";
                text.style.color = 'green';
                userScore++
                resultCounter();
                return;
            }
        }

        if (user === "scissors") {
            if (computerChoice === "rock") {
                text.textContent = "YOU LOOSE"
                text.style.color = 'red';
                computerScore++
                resultCounter();
                return;
            } else {
                text.textContent = "YOU WIN";
                text.style.color = 'green';
                resultCounter();
                return;
            }
        }
    }

    // Count Results
    const resultCounter = () => {
        const userCounter = document.querySelector(".userResult")
        const computerCounter = document.querySelector(".computerResult")

        userCounter.textContent = `${"Score: "}`.concat(userScore);
        computerCounter.textContent = `${"Score: "}`.concat(computerScore);
    }
    playGame();
    whoWins();

    const gameOver = (userOptions) => {

        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.resultText');

        userOptions.forEach(option => {
            option.style.display = 'none';
        })

        if (userScore > computerScore) {
            result.style.fontSize = '2.5rem';
            result.innerText = 'You win the game 🙂'
            result.style.color = 'green';
        }
        else if (userScore < computerScore) {
            result.style.fontSize = '2.5rem';
            result.innerText = 'You lost the game 🙁';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2.5rem';
            result.innerText = 'Its a draw 😬';
            result.style.color = 'orange'
        }
    }
}

fullGame()

// RESTART BUTTON
const restartBtn = document.querySelector('.restart');
restartBtn.addEventListener('click', () => {
    location.reload();
})