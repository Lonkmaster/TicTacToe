
//player maker
function playerMaker(name, marker) {
    this.name = name;
    this.marker = marker
}

// game board
const gameboard = (function (playerOne, playerTwo, dom) {
    let currentPlayer = playerOne

    let turnDisplay = dom.querySelector(".turnDisplay")
    let playerScore = dom.querySelector(".playerScore")
    let computerScore = dom.querySelector(".computerScore")
    let cells = dom.querySelectorAll(".cell")
    let restartBtn = dom.querySelector(".restart")

    for(let i = 0; i < cells.length; i++){
        let cellsIndex = cells[i].dataset.index;
        cells[i].addEventListener("click", () => { 
            console.log(gameOver)
            if(gameOver == true){
                return
            }
            console.log(cellsIndex)
            let turnResult = takeTurn(+cellsIndex);
            if( turnResult != NOTHING_VALUE || turnResult == GAME_OVER_VALUE) {
                return 
            }
            takeTurn()
        })
    }

    let playerIncrement = 0
    let computerIncrement = 0

    const O_WIN_VALUE = 1;
    const TIE_VALUE = 2
    const X_WIN_VALUE = 3;
    const NOTHING_VALUE = 0;
    const GAME_OVER_VALUE = 4;
    let gameOver = false

    let board = ["-","-","-","-","-","-","-","-","-"]

    function printBoard() {
        console.log(`${board[0]} ${board[1]} ${board[2]}`)
        console.log(`${board[3]} ${board[4]} ${board[5]}`)
        console.log(`${board[6]} ${board[7]} ${board[8]}`)
    };

    const checkForWinner = function (marker){
        let emptySpace = 0;
        let winningCombo = [
            //winning row
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            //winning column
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            //winning diagonal
            [0, 4, 8],
            [2, 4, 6],
        ]
        
        for(let i = 0; i < winningCombo.length; i++) {

            let currentCombination = winningCombo[i] // [0, 1, 2]
            if(board[currentCombination[0]] == marker && board[currentCombination[1]] == marker && board[currentCombination[2]] == marker){
                if(marker == "X"){
                    playerIncrement += 1
                    playerScore.textContent = "Score: "+ playerIncrement
                    turnDisplay.textContent = "X Won!"
                    console.log("You win!")
                    gameOver = true
                    return X_WIN_VALUE;
                }
                gameOver = true
                computerIncrement += 1
                computerScore.textContent = "Score: "+ computerIncrement
                turnDisplay.textContent = "O Won!"
                console.log("You lose!")
                return O_WIN_VALUE 
            }
        }
        
        for(let i = 0; i < board.length; i++) {
            let availableSpots = board[i]
    
            if(availableSpots == "-") {
                emptySpace++ 
            }
        }
        if(emptySpace == 0) {
            gameOver = true
            turnDisplay.textContent = "It's a tie!"
            console.log("It's a tie")
            return TIE_VALUE
        }
        return NOTHING_VALUE
    }
    
    // take turn
    function takeTurn(cellsnNumber) {
        function selection(marker, num) {
            if(num > 9) {
                return
            }
            let x = num
            board[x] = marker
        }
        
        let position;

        if(currentPlayer == playerOne) {
            
            if(cellsnNumber < 9 && cellsnNumber >= 0 && board[cellsnNumber] == "-") {
                cells[cellsnNumber].textContent = "X"
                selection(playerOne.marker, cellsnNumber)

            }
            else {
                return GAME_OVER_VALUE;
            }

            currentPlayer = playerTwo;
            return checkForWinner(playerOne.marker)
            
        } else {

            let computerChoice = Math.floor(Math.random() * 9);


            while (true) {
                if(board[computerChoice] == "-") {
                    position = computerChoice
                    cells[position].textContent = "O"
                    selection(playerTwo.marker, position)

                    break
                }
                computerChoice = Math.floor(Math.random() * 9);
            }
            currentPlayer = playerOne
            return checkForWinner(playerTwo.marker)
        }

    }

    function playGame() {

        while(true) {
            let result = takeTurn()
            printBoard()
            switch (result) {
                case X_WIN_VALUE:
                    console.log("X won the game!");
                    return;
                case O_WIN_VALUE:
                    console.log("O won the game!");
                    return;
                case TIE_VALUE:
                    console.log("The game was a tie!");
                    return;
            }
        }
    }

    restartBtn.addEventListener("click", () => {
            board = ["-","-","-","-","-","-","-","-","-"]
            gameOver = false
            currentPlayer = playerOne
            turnDisplay.textContent = ""
            for(let i = 0; i < cells.length; i++) {
                cells[i].textContent = ""
            }
        })

    return {
        playGame,
    }

})(new playerMaker("playerOne", "X"), new playerMaker("playerTwo", "O"), document);

//gameboard.playGame()
