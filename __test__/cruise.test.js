const { TestWatcher } = require("jest");
const { Ship, Port } = require("../src/cruise");



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

describe("Ports", () => {
    let port;
    beforeEach(() => {
      port = new Port("Bristol");  
    });

    it("new Port() should return an object", () => {
        expect(port).toBeInstanceOf(Object);
    })
    
    it("port should have a name", () => {
        
        expect(port.name).toBe('Bristol');
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
    let ship;
    beforeEach(() => {
        ship = new Ship('Bristol');
        });
    it("should have a method called set sail", () => {
        expect(ship.setSail).toBeInstanceOf(Function);
    })

    it("should change staring port to false", () => {
        ship.setSail(); 
        expect(ship.startingPort).toBeFalsy();
    })
});

describe("Docking at a port", () => {
    let port;
    let port2;
    let ship;
    beforeEach(() => {
      port = new Port("Bristol");  
      port2 = new Port("Lindsfeild");  
      ship = new Ship("London");
    });

    it("Should be able to docke at a new port", () => {
        ship.dock(port);
        expect(ship.startingPort).toBe("Bristol");
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
        ship.dock(port2);
        expect(ship.startingPort).toBe("Lindsfeild");
    })
});

