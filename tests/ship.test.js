import { createCarrier, createBattleship, createCruiser, createSubmarine, createDestroyer } from '../src/ship';

test('carrier is created', () => {
    const ship = createCarrier([[0, 0], [0, 4]]);
    expect(ship.name).toBe('Carrier');
    expect(ship.size).toBe(5);
    expect(ship.pos).toEqual([[0, 0], [0, 4]]);
    expect(ship.hits).toBe(0);
});

test('battleship is created', () => {
    const ship = createBattleship([[0, 0], [0, 3]]);
    expect(ship.name).toBe('Battleship');
    expect(ship.size).toBe(4);
    expect(ship.pos).toEqual([[0, 0], [0, 3]]);
    expect(ship.hits).toBe(0);
});

test('cruiser is created', () => {
    const ship = createCruiser([[0, 0], [0, 2]]);
    expect(ship.name).toBe('Cruiser');
    expect(ship.size).toBe(3);
    expect(ship.pos).toEqual([[0, 0], [0, 2]]);
    expect(ship.hits).toBe(0);
});

test('submarine is created', () => {
    const ship = createSubmarine([[0, 0], [0, 2]]);
    expect(ship.name).toBe('Submarine');
    expect(ship.size).toBe(3);
    expect(ship.pos).toEqual([[0, 0], [0, 2]]);
    expect(ship.hits).toBe(0);
});

test('destroyer is created', () => {
    const ship = createDestroyer([[0, 0], [0, 1]]);
    expect(ship.name).toBe('Destroyer');
    expect(ship.size).toBe(2);
    expect(ship.pos).toEqual([[0, 0], [0, 1]]);
    expect(ship.hits).toBe(0);
});