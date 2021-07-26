const Ship = require("../src/cruise");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");


describe("Ports", () => {
    let Bristol;
    let ship;
    let itinerary;
    beforeEach(() => {
      Bristol = new Port("Bristol"); 
      itinerary = new Itinerary([Bristol]); 
      ship = new Ship(itinerary);
    });

    it("new Port() should return an object", () => {
        expect(Bristol).toBeInstanceOf(Object);
    });
    
    it("port should have a name", () => {
        
        expect(Bristol.name).toBe('Bristol');
    });

    it("should have a property called ships", () => {
        expect(Bristol.ships).toContain(ship);
    });
    it("should be able to add ships", () => {
        Bristol.removeShip()
        Bristol.addShip(ship);
        expect(Bristol.ships).toContain(ship);
    });
    it("should be able to remove ships", () => {
        Bristol.addShip(ship);
        Bristol.removeShip();
        expect(Bristol.ships).toEqual([]);
    });


});