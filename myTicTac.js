let boxes = Array.from(document.getElementsByClassName('box'));

const xTest = 'X';
const oText = 'O';
let moves = 0
let player1Score = 0;
let player2Score = 0;
let curPlayer = xTest;
let blocks = Array(9).fill(null);

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const playGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
} 

function boxClicked(e) {
    console.log('box has been clicked');
    const id = e.target.id
    if(!blocks[id]) {
        blocks[id] = curPlayer
        e.target.innerText = curPlayer
        moves++;
        // console.log(curPlayer);

        if (playerWon() !== false) {
            let winningBlocks = playerWon();
            winningBlocks.map(box => boxes[box].style.backgroundColor="blue");
            playerText = `${curPlayer} has won!`
            alert(playerText)
            if (curPlayer === xTest) {
                curPlayer = player1Score
                player1Score++;
                document.getElementById('player1').innerHTML = `Player1: ${player1Score}`;
                restart();
            }
            if (curPlayer === oText) {
                curPlayer = player2Score
                player2Score++;
                document.getElementById('player2').innerHTML = `Player2: ${player2Score}`;
                restart();
            }
            return
        }

        if (gameTie() !== false) {
            return
            
        }

        // if (moves === boxes.length) {
        //     alert('The game is tied!');
        //     restart()
        // }

    }
    curPlayer = curPlayer == xTest ? oText : xTest;

}

function playerWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition;
        if (blocks[a] && (blocks[a] === blocks[b] && blocks[a] === blocks[c])){
            return [a,b,c]
        }
    }
    return false
}

function gameTie() {
    if (moves === boxes.length) {
        alert('The game is tied')
        restart()
        return true
    }
    return false
}
    

restartBtn.addEventListener('click', restart)

function restart() {
    blocks.fill(null)
    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor = ''
    })

    curPlayer = xTest;
}

playGame();