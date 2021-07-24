const { TestWatcher } = require("jest");
const Ship = require("../src/cruise");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");


describe("It can have ports", () => {
    it("should have a port", () => {

        const Bristol = new Port("Bristol");
        const London = new Port("London");

        const test_Itinerary = new Itinerary([Bristol, London]);

        expect(test_Itinerary.ports).toEqual([Bristol, London]);


    })
})