
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");


describe("Ports", () => {
    let port;
    let ship;
    let itinerary;
    let titanic;
    let queenMary


    beforeEach(() => {
        port = new Port("Bristol"); 
        itinerary = new Itinerary([port]); 
        ship = jest.fn();
        titanic = jest.fn();
        queenMary = jest.fn();
    });

    it("new Port() should return an object", () => {

        expect(port).toBeInstanceOf(Object);
    });
   
    it("should be able to add ships", () => {

        port.removeShip()
        port.addShip(titanic);
        expect(port.ships).toContain(titanic);
    });
    it("should be able to remove ships", () => {
    
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
    });


});