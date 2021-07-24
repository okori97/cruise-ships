const Port = require("../src/port");


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