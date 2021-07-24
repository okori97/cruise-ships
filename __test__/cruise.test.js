const { TestWatcher } = require("jest");
const Ship = require("../src/cruise");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");






describe("Building a ship", () => {
    let ship;
    let port;
    let itinerary;

    beforeEach(() => {
        port = new Port('Bristol');
        itinerary = new Itinerary([port]);
        ship = new Ship(itinerary);
        });


    it("should return a object", () => {
       
        expect(ship).toBeInstanceOf(Object);
    })

    it("should have a starting port", () => {
        expect(ship.currentPort).toBe(port);
    })
   
});




describe("Setting sail!", () => {
    let ship;
    let port;
    beforeEach(() => {
        port = new Port("Bristol");
        const London = new Port("London");
        const itinerary = new Itinerary([port, London]);
        ship = new Ship(itinerary);
        });

    it("should have a method called set sail", () => {
        expect(ship.setSail).toBeInstanceOf(Function);
    })

    it("should change staring port to false", () => {
        ship.setSail(); 
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port);

    })

    it("can\'t sail further than it\'s itinerary", () => {
        const Bristol = new Port('Bristol');
        const London = new Port('London');
        const itin = new Itinerary([Bristol, London]);
        const ship2 = new Ship(itin);

        ship2.setSail();
        ship2.dock();

        expect(() => ship2.setSail()).toThrowError('End of itinerary reached');
    })
});

describe("Docking at a port", () => {
    let bristol;
    let Lindsfeild;
    let ship;
    beforeEach(() => {
      bristol= new Port("Bristol");  
      Lindsfeild = new Port("Lindsfeild"); 
      const itinerary = new Itinerary([bristol, Lindsfeild]) 
      ship = new Ship(itinerary);
    });

    it("can dock at a different port", () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(Lindsfeild);

    })

   /* it("Should be able to dock at a new port", () => {
        ship.dock(port);
        expect(ship.startingPort).toBe("Bristol");
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
        ship.dock(port2);
        expect(ship.startingPort).toBe("Lindsfeild");
    })
    */
});

