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
    it("should get added to starting port on instantiation", () => {
        expect(ship.currentPort.ships).toContain(ship);
    })
   
});




describe("Can set sail!", () => {
    
    let ship;
    let Bristol;
    let itinerary;
    let London
    let otherShip;

    beforeEach(() => {

        Bristol = new Port("Bristol");
        London = new Port("London");
        itinerary = new Itinerary([Bristol, London]);
        ship = new Ship(itinerary);
        otherShip = new Ship(itinerary);

        });

    it("should have a method called set sail", () => {

        expect(ship.setSail).toBeInstanceOf(Function);
    })

    it("setting sail should change starting port to false", () => {

        ship.setSail(); 
        expect(ship.currentPort).toBeFalsy();
        expect(Bristol.ships).not.toContain(ship);
        expect(ship.previousPort.ships).not.toContain(ship);
        expect(ship.previousPort).toBe(Bristol);

    })
    it("setting sail should remove ship from previous port", () => {

        expect(ship.currentPort.ships).toContain(ship);
        ship.setSail(); 
        expect(ship.previousPort.ships).not.toContain(ship);
       
        
    })

    it("can\'t sail further than it\'s itinerary", () => { 

        otherShip.setSail();
        otherShip.dock();
        expect(() => otherShip.setSail()).toThrowError('End of itinerary reached');
    })
});

describe("Docking at a port", () => {

    let bristol;
    let Lindsfeild;
    let ship;
    let itinerary;

    beforeEach(() => {
      bristol= new Port("Bristol");  
      Lindsfeild = new Port("Lindsfeild"); 
      itinerary = new Itinerary([bristol, Lindsfeild]) 
      ship = new Ship(itinerary);
    });

    it("can dock at a different port", () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(Lindsfeild);
        expect(ship.currentPort.ships).toContain(ship);

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

