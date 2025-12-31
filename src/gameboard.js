import { Ship } from './ship';

class Cell {
    constructor(cellStatus=0, cellID) {
        // Status contains the current state of the cell
        // 0 = water
        // 1 = ship
        // 2 = ship hit
        // 3 = miss
        this.cellStatus = cellStatus;
        this.cellID = cellID;
    }

    updateStatus(newStatus) {
        if (this.status !== newStatus) {
            return this.status = newStatus;
        }
        
        return
    }
}

class Gameboard {

    board = this.#createGameboard()

    #createGameboard() {
        let matrix = [];
        const rows_columns = 10;

        for (let i = 0; i < rows_columns; i++) {
            const row = [];
            const char = String.fromCharCode(65 + i);

            for (let j = 0; j < rows_columns; j++) {
                const newCell = new Cell(0, char + (j + 1))
                row.push(newCell)
            }
            matrix.push(row);
        }

        return matrix;
    }

    #getCellPostion(cellID) {
        const row = cellID.charCodeAt(0) - 65;
        const col = parseInt(cellID.slice(1)) - 1;

        return [row, col];
    }

    // TODO: (Private) Validate Placement

    // TODO: Place Ship
    placeShip(cell, ship) {
        if (cell.cellStatus !== 0) {
            console.log('Invlaid Ship Location');
            return;
        }
        else {
            let [row, col] = this.#getCellPostion(cell.cellID);

            for (let i = 0; i < ship.length; i++) {
                this.board[row][col].cellStatus = 1;

                if (ship.orientaion === 0) {
                    col++;
                }
                else {
                    row++;
                }
            }
            
        }
    }

    // TODO: Receive Attack

    // TODO: Game Won
}

export { Gameboard, Cell }