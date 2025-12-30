class Gameboard {
    constructor(board) {
        this.board = this.#createGameboard();
    }

    #createGameboard() {
        return this.board = [
            [1,1,1],
            [1,1,1]
        ]
    }
}

// class Cell {

// }

export { Gameboard }