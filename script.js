
        const computerChoiceDisplay = document.getElementById('computer-choice-img');
        const userChoiceDisplay = document.getElementById('user-choice-img');
        const resultDisplay = document.getElementById('result');
        const possibleChoices = document.querySelectorAll('button');
        let userChoice;
        let computerChoice;
        let result;

        possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
            userChoice = e.target.id;
            userChoiceDisplay.src = `${userChoice}.png`; // Assuming images are named as 'rock.png', 'paper.png', 'scissors.png'
            userChoiceDisplay.style.display = 'block';
            generateComputerChoice();
            getResult();
        }));

        function generateComputerChoice() {
            const randomNumber = Math.floor(Math.random() * 3) + 1;

            if (randomNumber === 1) {
                computerChoice = 'rock';
            } else if (randomNumber === 2) {
                computerChoice = 'scissors';
            } else if (randomNumber === 3) {
                computerChoice = 'paper';
            }
            computerChoiceDisplay.src = `${computerChoice}.png`; // Assuming images are named as 'rock.png', 'paper.png', 'scissors.png'
            computerChoiceDisplay.style.display = 'block'; 
        }

        function getResult() {
            if (computerChoice === userChoice) {
                result = 'It\'s a draw!';
            } else if ((computerChoice === 'rock' && userChoice === 'paper') ||
                       (computerChoice === 'scissors' && userChoice === 'rock') ||
                       (computerChoice === 'paper' && userChoice === 'scissors')) {
                result = 'You win!';
            } else {
                result = 'You lose!';
            }
            resultDisplay.innerHTML = result;
        }
    