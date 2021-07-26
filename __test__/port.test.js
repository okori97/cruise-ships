const Ship = require("../src/cruise");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");


describe("Ports", () => {
    let port;
    let ship;
    let itinerary;
    let Titanic;
    beforeEach(() => {
        port = new Port("Bristol"); 
        itinerary = new Itinerary([port]); 
        ship = new Ship(itinerary);
        Titanic = new Ship(itinerary);
    });

    it("new Port() should return an object", () => {
        expect(port).toBeInstanceOf(Object);
    });
   
    it("should be able to add ships", () => {
        port.removeShip()
        port.addShip(ship);
        expect(port.ships).toContain(ship);
    });
    it("should be able to remove ships", () => {
    const port = new Port('Dover');
    const titanic = jest.fn();
    const queenMary = jest.fn();

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
    });


});