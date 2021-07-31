const { TestWatcher } = require("jest");
const Itinerary = require("../src/itinerary");


describe("It can have ports", () => {

    let Bristol;
    let London;
    let test_Itinerary;

    beforeEach(() => {

         Bristol = jest.fn();
         London = jest.fn();
         test_Itinerary = new Itinerary([Bristol, London]);
        
    });

    it("should have a port", () => {

        expect(test_Itinerary.ports).toEqual([Bristol, London]);


    })
})