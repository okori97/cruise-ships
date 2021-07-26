function Port(name) {
    this.name = `${name}`;
    this.ships = [];
};

Port.prototype.addShip = function(ship){
    this.ships = [ship];
};
Port.prototype.removeShip = function(){
    this.ships = [];
};

module.exports = Port;