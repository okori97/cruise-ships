const { TestWatcher } = require("jest");
const Ship = require("../src/cruise");






describe("Building a ship", () => {
    let ship;
    let port;
    let itinerary;

    beforeEach(() => {

    
        port =  {
            addShip : jest.fn(),
            removeShip : jest.fn(),
            name : 'Bristol',
            ships : [],
        };

        itinerary = { 
            ports : [port]
        };

        ship = new Ship(itinerary);

        });


    it("should return a object", () => {
        expect(ship).toBeInstanceOf(Object);
        
    })

    it("should have a starting port", () => {
        expect(ship.currentPort).toBe(port);
    })
    it("should get added to starting port on instantiation", () => {
        expect(port.addShip).toHaveBeenCalledWith(ship);    })
   
});




describe("Can set sail!", () => {

    let ship;
    let Bristol;
    let itinerary;
    let London
    let otherShip;

    beforeEach(() => {

        Bristol =  {
            addShip : jest.fn(),
            removeShip : jest.fn(),
            name : 'Bristol',
            ships : [],
        };

        London =  {
            addShip : jest.fn(),
            removeShip : jest.fn(),
            name : 'London',
            ships : [],
        };

        itinerary = { 
            ports : [Bristol, London]
        };

        ship = new Ship(itinerary);
        otherShip = new Ship(itinerary);

        });

    it("should have a method called set sail", () => {

        expect(ship.setSail).toBeInstanceOf(Function);
    })

    it("setting sail should change starting port to false", () => {

        ship.setSail(); 
        expect(ship.currentPort).toBeFalsy();
        expect(Bristol.removeShip).toHaveBeenCalledWith(ship);
        expect(ship.previousPort).toBe(Bristol);

    })
    it("setting sail should remove ship from previous port", () => {
        ship.dock(Bristol);
        expect(Bristol.addShip).toHaveBeenCalledWith(ship);
        ship.setSail(); 
        expect(Bristol.removeShip).toHaveBeenCalledWith(ship);
       
        
    })

    it("can\'t sail further than it\'s itinerary", () => { 

        otherShip.setSail();
        otherShip.dock();
        expect(() => otherShip.setSail()).toThrowError('End of itinerary reached');
    })
});

describe("Docking at a port", () => {

    let Bristol;
    let Lindsfeild;
    let ship;
    let itinerary;

    beforeEach(() => {

      Bristol =  {
        addShip : jest.fn(),
        removeShip : jest.fn(),
        name : 'Bristol',
        ships : [],
    };
    Lindsfeild =  {
        addShip : jest.fn(),
        removeShip : jest.fn(),
        name : 'Lindsfield',
        ships : [],
    };
    itinerary = { 
        ports : [Bristol, Lindsfeild]
    }
      ship = new Ship(itinerary);
    });

    it("can dock at a different port", () => {
        ship.setSail();
        ship.dock();
        expect(Bristol.removeShip).toHaveBeenCalledWith(ship);
        expect(Lindsfeild.addShip).toHaveBeenCalledWith(ship);

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

