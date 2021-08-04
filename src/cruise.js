
(function exportShip() {


    function Ship(itinerary) {
        this.currentPort = itinerary.ports[0];
        this.itinerary = itinerary;
        this.previousPort = [];
        this.currentPort.addShip(this);
        
    }

    Ship.prototype =  {
        setSail() {
            const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);

            if(currentPortIndex === (this.itinerary.ports.length - 1)) {
                throw new Error('End of itinerary reached');
            }

            this.currentPort.removeShip(this);
            this.previousPort = this.currentPort;
            this.currentPort = null;
        
        },

        dock() {
            const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
            this.currentPort = this.itinerary.ports[previousPortIndex +1];
            this.currentPort.addShip(this);
         },

    };

    if(module != 'undefined' && module.exports) {
        module.exports = Ship;
    } else {
        window.Ship = Ship;
    }
    
}())



