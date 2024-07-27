
let currentPlayer;

const playerOne = {
    name: "playerOne",
    marker: "X"
}

const playerTwo = {
    name: "PlayerTwo",
    marker: "O"
}

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
        }
        
    }
}

// take turn

function takeTurn() {

    currentPlayer = playerOne

    if(currentPlayer == playerOne) {

        let position;

        while (true) {
            position = prompt("Pick a number 0 - 8")
            if(position < 9 && position >= 0 && board[position] == "-") {
                break
            }
            position = "not a valid Number!"
        }

        currentPlayer = playerTwo;

        console.log("nigga");
        
    } else {

        let computerChoice = Math.floor(Math.random() * 9);
        
        while (true) {
            if(board[computerChoice] == "-") {
                position == computerChoice
                break
            }
            computerChoice = Math.floor(Math.random() * 9);
        }

    }

}

takeTurn()

selection(playerOne.marker, 3)
checkWinningCombo(playerOne.marker)
printBoard()























/*const playerOne = {
    name: "playerOne",
    marker: "X"
}

const playerTwo = {
    name: "PlayerTwo",
    marker: "O"
}


function printName(selector) {
    console.log(selector.name);
}



printName(playerTwo)


function createGrid() {
    let row1 = ["", "", ""];
    let row2 = ["", "", ""];
    let row3 = ["", "", ""];
    let boardList = [row1, row2, row3];
    return boardList;
};



function selection(marker, num) {

    if(num > 9) {
        return
    }
    let x = (num)%3
    let y = Math.floor((num)/3)

    board[y][x] = marker

}


function winCheck() {
    const winCombinations = [
        //row 
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // column
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //diagonal
        [0, 4, 8],
        [2, 4, 6],
    ];

   
}

let board = createGrid()

function checkCombination(combination) {
    //combination = [0, 1, 2]
    let previousCell = null

    for(let i = 0; i < combination.length; i++) {
        let currentIndex = combination[i]
        
        let x = (currentIndex)%3
        let y = Math.floor((currentIndex)/3)
        console.log(board[x][y])
        console.log(currentIndex)
        if(previousCell == null) {
            previousCell = board[x][y]
            continue
        }
        if(previousCell != board[x][y]) {
            console.log(previousCell)
            return false
        }
    }
    if(previousCell != "") {
        return true
    }

    return false;
}


selection(playerOne.marker, 0)

console.log(checkCombination([0, 1, 2]))



console.log(board)



const board = (function() {
    let boardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let playerNum; 

    function print() {
        let text = "";
        for (let i = 0; i < boardNumbers.length; i++) {
            text += boardNumbers[i];
            if (text.length == 3) {
                console.log(text);
                text = "";
            }
        }
    }

    function sayPickSpot() {
        console.log("pick a spot based on the number");
        playerNum = prompt("pick a number")

    }

    function currentPlayer() {

    }

    return {
        print,
        sayPickSpot,
        currentPlayer,
    }
})();



board.print()
board.sayPickSpot()*/

