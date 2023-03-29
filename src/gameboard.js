class Gameboard {
    constructor(ships = []) {
        this.ships = ships;
        this.misses = [];
        this.hits = [];
    }

    receiveAttack(x, y) {

        for (let i = 0; i < this.ships.length; i++) {
            let ship = this.ships[i];
            let position = ship.pos;
            if (position[0][0] <= x && x <= position[1][0] && position[0][1] <= y && y <= position[1][1]) {
                ship.hit();
                if (ship.isSunk()) {
                    this.ships = this.ships.filter(ship => ship !== this.ships[i]);
                }
                this.hits.push([x, y]);
                return true
            }
        }
        this.misses.push([x, y]);
        return false

    }

    allSunk() {
        return this.ships.length === 0;
    }
}
