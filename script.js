









//player maker
function playerMaker(name, marker) {
    this.name = name;
    this.marker = marker
}

// game board
const gameboard = (function (playerOne, playerTwo) {
    let currentPlayer = playerOne
    const O_WIN_VALUE = 1;
    const TIE_VALUE = 2
    const X_WIN_VALUE = 3;
    const NOTHING_VALUE = 0;

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
                    console.log("You win!")
                    return X_WIN_VALUE;
                }
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
            console.log("It's a tie")
            return TIE_VALUE
        }
        return NOTHING_VALUE
    }
    
    // take turn
    function takeTurn() {

        function selection(marker, num) {
            if(num > 9) {
                return
            }
            let x = num
            board[x] = marker
        }
        
        let position;

        if(currentPlayer == playerOne) {

            while (true) {
                position = prompt("Pick a number 0 - 8")
                if(position < 9 && position >= 0 && board[position] == "-") {
                    selection(playerOne.marker, position)
                    break
                }
                position = "not a valid Number!"
            }

            currentPlayer = playerTwo;
            return checkForWinner(playerOne.marker)
            
        } else {

            let computerChoice = Math.floor(Math.random() * 9);

            while (true) {
                if(board[computerChoice] == "-") {
                    position = computerChoice
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

    return {
        playGame,
    }
})(new playerMaker("playerOne", "X"), new playerMaker("playerTwo", "O"));

//gameboard.playGame()














/*const O_WIN_VALUE = 1;
const TIE_VALUE = 2
const X_WIN_VALUE = 3;
const NOTHING_VALUE = 0;

const playerOne = {
    name: "playerOne",
    marker: "X"
}

const playerTwo = {
    name: "PlayerTwo",
    marker: "O"
}

let currentPlayer = playerOne


let board = ["-","-","-","-","-","-","-","-","-"]
//print Board
function printBoard() {
    console.log(`${board[0]} ${board[1]} ${board[2]}`)
    console.log(`${board[3]} ${board[4]} ${board[5]}`)
    console.log(`${board[6]} ${board[7]} ${board[8]}`)
}

//selecton 
function selection(marker, num) {
    if(num > 9) {
        return
    }
    let x = num
    board[x] = marker
}

//check for winner

function checkWinningCombo (marker) {
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
            console.log("You win!")
            if(marker == "X"){
                return X_WIN_VALUE;
            }
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
        console.log("It's a tie")
        return TIE_VALUE
    }
    return NOTHING_VALUE
}

// take turn

function takeTurn() {

    function selection(marker, num) {
        if(num > 9) {
            return
        }
        let x = num
        board[x] = marker
    }
    
    let position;

    if(currentPlayer == playerOne) {

        while (true) {
            position = prompt("Pick a number 0 - 8")
            if(position < 9 && position >= 0 && board[position] == "-") {
                selection(playerOne.marker, position)
                break
            }
            position = "not a valid Number!"
        }

        currentPlayer = playerTwo;
        return checkWinningCombo(playerOne.marker)
        
    } else {

        let computerChoice = Math.floor(Math.random() * 9);

        while (true) {
            if(board[computerChoice] == "-") {
                position = computerChoice
                selection(playerTwo.marker, position)
                break
            }
            computerChoice = Math.floor(Math.random() * 9);
        }
        currentPlayer = playerOne
        return checkWinningCombo(playerTwo.marker)
    }

}


function playGame() {

    while(true) {
        printBoard()
        let result = takeTurn()
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

playGame()
*/ 

