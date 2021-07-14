const { TestWatcher } = require("jest");
const Ship = require("../src/cruise");


describe("Building a ship", () => {
    let boat;
    beforeEach(() => {
        boat = new Ship('Bristol');
        });

    it("should return a object", () => {
        expect(boat).toBeInstanceOf(Object);
    })

    it("should have a starting port", () => {
        expect(boat.startingPort).toBe('Bristol');
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
});

describe("Setting sail!", () => {
    let boat;
    beforeEach(() => {
        boat = new Ship('Bristol');
        });
    it("should have a method called set sail", () => {
        expect(boat.setSail).toBeInstanceOf(Function);
    })

    it("should change staring port to false", () => {
        boat.setSail(); 
        expect(boat.startingPort).toBeFalsy();
    })
});

