class Ship {
    constructor(length, orientaion=0, hits, sunk) {
        this.length = length;
        this.orientaion = orientaion; // 0 = horizontal, 1 = vertical
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        return this.hits += 1;
    }

    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
            return;
        }

        return;
    }
}

export { Ship }