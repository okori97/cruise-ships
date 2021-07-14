
function Ship(port) {
    this.startingPort = `${port}`;
    this.passengers = 0;
    this.isDocked = true;
    this.destination = '';
    
};

Ship.prototype.boardPassengers = function(amount_Of_People) {
return this.passengers += amount_Of_People;
}

Ship.prototype.setSail = function() {
    return this.startingPort = false;
};

module.exports = Ship;