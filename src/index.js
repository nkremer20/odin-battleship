import './styles.css';
import { Ship } from './ship';
import { Gameboard } from './gameboard';


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