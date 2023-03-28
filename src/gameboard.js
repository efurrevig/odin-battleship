class Gameboard {
    constructor() {
        this.ships = [];
        this.misses = [];
        this.hits = [];
    }
}
/*
    [[xstart, ystart], [xend, yend]]
        ship hit if:
            xstart <= x <= xend && ystart <= y <= yend
            &&
            board.misses does not contain [x, y]
        else:
            board.misses.push([x, y])
*/