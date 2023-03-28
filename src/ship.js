class Ship {
    constructor(name, size, xPos, yPos, orientation) {
        this.name = name;
        this.size = size;
        this.xPos = xPos;
        this.yPos = yPos;
        this.orientation = orientation;
        this.hits = 0;
    }

    hit() {
        this.hits += 1;
    }

    isSunk() {
        return this.hits === this.size;
    }
}