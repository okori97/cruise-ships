
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

Ship.prototype.dock = function(port) {
    return this.startingPort = `${port.name}`;
}

function Port(name) {
    this.name = `${name}`;
};


module.exports = {Ship, Port};
