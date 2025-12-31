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
}

export { Gameboard }