class Ship {
    constructor(shipType, orientaion=0) {
        this.shipType = shipType
        this.orientaion = orientaion; // 0 = horizontal, 1 = vertical
        this.length = this.#calcLength();
        this.hits = 0;
        this.sunk = false;
    }

    #calcLength() {
        const shipTypes = {
            'Aircraft Carrier': 5, 
            'Battleship': 4, 
            'Cruiser': 3, 
            'Submarine': 3, 
            'Partol Boat': 2
        };

        return shipTypes[this.shipType];

    }

    hit() {
        return this.hits += 1;
    }

    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
            return true;
        }

        return false;
    }
}

export { Ship }