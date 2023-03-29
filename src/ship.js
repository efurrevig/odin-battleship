class Ship {
    constructor(name, size, pos) {
        this.name = name;
        this.size = size;
        this.pos = pos; // [[xstart, ystart], [xend, yend]]
        this.hits = 0;
    }

    hit() {
        this.hits += 1;
    }

    isSunk() {
        return this.hits === this.size;
    }
}

function createCarrier(pos) {
    return new Ship("Carrier", 5, pos);
}

function createBattleship(pos) {
    return new Ship("Battleship", 4, pos);
}

function createCruiser(pos) {
    return new Ship("Cruiser", 3, pos);
}

function createSubmarine(pos) {
    return new Ship("Submarine", 3, pos);
}

function createDestroyer(pos) {
    return new Ship("Destroyer", 2, pos);
}


export  { createCarrier, createBattleship, createCruiser, createSubmarine, createDestroyer };
/*
    -Carrier(5)
    -Battleship(4)
    -Cruiser(3)
    -Submarine(3)
    -Destroyer(2)

*/