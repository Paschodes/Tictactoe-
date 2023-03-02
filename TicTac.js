//Initialize variables to keep track of the game state. this includes;

//A variable to keep track of the current player(X or O)
let curPlayer = 'X';
//An array to store the state of each cell(empty, X, or O)
let gameState = ['', '', '', '', '', '', '', '', ''];
//Variables to keep track of whether the game is won or tied
let gameWon = false;
let gameTied = false;



//Use event listeners to detect when the player clicks on a cell and call the function to handle their move.
const cells = document.querySelectorAll('.cell');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', playerMove());
}



////Write a function to handle a player's move. This function should:
function playerMove() {
    //Update the state of the cell that was clicked
    //first select all the cells in the game 
    const cells = document.querySelectorAll('td');
    // Loop through the cells and add an event listener to each one
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', () => {
            // If the cell(gameState) is unoccupied and the game is not won or tied, update the cell
            if(gameState[i] === '') {
                gameState[i] = curPlayer;
                cells[i].textContent = curPlayer;

                //Check if the game is won or tied
                let gameWon = checkGameWin();
                if (gameWon) {
                    alert(`player ${curPlayer} won!`);
                    resetGame();
                } else if (checkGameTie()) {
                    alert('Tie game!');
                    resetGame();
                } else {
                    switchPlayer();
                }

                //Switch to the other player's turn
                //switchPlayer();
            }
        });
    }
    
    //Switch to the other player's turn
    //Check if the game is won or tied
    //Update the display of the game board
}
playerMove();



function switchPlayer() {
    curPlayer = (curPlayer === 'X') ? 'O' : 'X';
}



////Write functions to check if the game is won or tied. This could include:
//function to check if a player has won by getting three in a row horizontally, vertically, or diagonally
function checkGameWin() {
    //Check rows... note: i += 3 means increasing by 3
    for (let i = 0; i < 9; i +=3) {
        if (gameState[i] === gameState[i + 1] && gameState[i + 1] === gameState[i + 2] && gameState[i] !== '') {
            //note gateState[i] means current gameState
            return true;
        }
    }
    //Check columns
    for (let i = 0; i < 3; i++) {
        if (gameState[i] === gameState[i + 3] && gameState[i + 3] === gameState[i + 6] && gameState !== '') {
            return true;
        }
    }
    //check diagonals: left to right
    if (gameState[i] === gameState[4] && gameState[4] === gameState[8] && gameState[i] !== '') {
        return true;
    }
    //check diagonals: right to left
    if (gameState[i] === gameState[2] && gameState[2] === gameState[6] && gameState[i] !== '') {
        return true;
    }
    //No player has won
    return false;
}
//The checkWin function checks if a player has won by checking each row, column, and diagonal in the game board to see if all three cells have the same value and are not empty.
// If a player has won, the function returns true, otherwise it returns false.


////Function to check if the game is tied (all cells are filled and no player has won)
function checkGameTie() {
    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i] === '') {
            return false
        }
    }
    // No empty cells and no player has won
    return true;
}
//The checkTie function checks if the game is tied by looping through all the cells in the game board and checking if there are any empty cells.
// If all cells are filled and no player has won, the function returns true, otherwise it returns false. 



function resetGame() {
  gameState = ["", "", "", "", "", "", "", "", ""];
  curPlayer = "X";
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}


// function resetGame() {
//     curPlayer = 'X';
//     gameState.fill('');
//     cells.forEach(cell => cell.innerText = '');
// }









// const cells = document.querySelectorAll('td');
// let currentPlayer = "X";
// let gameState = ["", "", "", "", "", "", "", "", ""];

// for (let i = 0; i < cells.length; i++) {
//   cells[i].addEventListener("click", handleMove);
// }

// function handleMove(e) {
//   let cellIndex = parseInt(e.target.getAttribute("data-cell-index"));

//   if (gameState[cellIndex] === "") {
//     gameState[cellIndex] = currentPlayer;
//     e.target.textContent = currentPlayer;

//     let gameWon = checkWin();
//     if (gameWon) {
//       alert(`Player ${currentPlayer} won!`);
//       resetGame();
//     } else if (checkTie()) {
//       alert("Tie game!");
//       resetGame();
//     } else {
//       switchPlayer();
//     }
//   }
// }
 
// function switchPlayer() {
//   currentPlayer = currentPlayer === "X" ? "O" : "X";
// }

// function checkWin() {
//   // Check rows
//   for (let i = 0; i < 9; i += 3) {
//     if (gameState[i] === gameState[i + 1] && gameState[i + 1] === gameState[i + 2] && gameState[i] !== "") {
//       return true;
//     }
//   }

//   // Check columns
//   for (let i = 0; i < 3; i++) {
//     if (gameState[i] === gameState[i + 3] && gameState[i + 3] === gameState[i + 6] && gameState[i] !== "") {
//       return true;
//     }
//   }

//   // Check diagonals
//   if (gameState[0] === gameState[4] && gameState[4] === gameState[8] && gameState[0] !== "") {
//     return true;
//   }
//   if (gameState[2] === gameState[4] && gameState[4] === gameState[6] && gameState[2] !== "") {
//     return true;
//   }

//   return false;
// }

// function checkTie() {
//   for (let i = 0; i < gameState.length; i++) {
//     if (gameState[i] === "") {
//       return false;
//     }
//   }
//   return true;
// }

// function resetGame() {
//   gameState = ["", "", "", "", "", "", "", "", ""];
//   currentPlayer = "X";
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].textContent = "";
//   }
// }
