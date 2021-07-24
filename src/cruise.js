
function Ship(itinerary) {
    this.currentPort = itinerary.ports[0];
    this.itinerary = itinerary;
    this.previousPort = null;
    
};



function Itinerary(ports) {
    this.ports = ports;
};


Ship.prototype.boardPassengers = function(amount_Of_People) {
return this.passengers += amount_Of_People;
}

Ship.prototype.setSail = function() {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

    if(currentPortIndex === (this.itinerary.ports.length - 1)) {
        throw new Error('End of itinerary reached');
    }
    this.previousPort = this.currentPort;
    this.currentPort = null;
    
};

Ship.prototype.dock = function(port) {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
    this.currentPort = itinerary.ports[previousPortIndex +1];


}



module.exports = Ship;
