import './styles.css';
import { Ship } from './ship';
import { Gameboard } from './gameboard';

function CreatePlayerInputs() {
    const starGameBtn = document.createElement('button');
    starGameBtn.textContent = 'Start Game'
    document.body.appendChild(starGameBtn)
}

const startNewGameBtn = document.getElementById('start-new-game-btn')

if (startNewGameBtn) {
    startNewGameBtn.addEventListener('click', () => {
        document.startViewTransition(() => {
            // Move title to header
            const battleshipTitle = document.getElementById('battleship-title');
            const header = document.getElementById('header');
            header.appendChild(battleshipTitle);

            // Remove title container to remove subtitle and start new game button
            const titleContainer = document.getElementById('title-container');
            titleContainer.remove();

            // TODO: Create player input
            setTimeout(CreatePlayerInputs, 250)
            // CreatePlayerInputs()
        })
    })
}

const newBoard = new Gameboard()
const newShip = new Ship('Battleship', 1)
console.log(newShip)
newBoard.placeShip(newBoard.board[0][5], newShip)
console.log(newBoard.receiveAttack(newBoard.board[0][11]));

let output = []
newBoard.board.forEach(row => {
    let temp = []
    row.forEach(element => {
        temp.push(element.cellStatus)
    })
    output.push(temp)
})
console.table(output)