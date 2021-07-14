const { TestWatcher } = require("jest");
const Ship = require("../src/cruise");


describe("Building a ship", () => {
    let boat;
    beforeEach(() => {
        boat = new Ship();
        });

    it("should return a object", () => {
        expect(boat).toBeInstanceOf(Object);
    })

    it("should be able to carry passengers", () => {
        expect(boat.passengers).toEqual(0);
    })
});

describe("Boarding the ship", () => {
    let boat;
    beforeEach(() => {
        boat = new Ship();
        });

    it("should allow passengers to board the ship", () => {
        boat.boardPassengers(2);
        expect(boat.passengers).toEqual(2);
    })
})

