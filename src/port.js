function Port(name) {
    this.name = name;
    this.ships = [];
};

Port.prototype.addShip = function(ship){
    this.ships.push(ship);
};

Port.prototype.removeShip = function(ship){
    
  this.ships = this.ships.filter(dockedShip => dockedShip !== ship)
};

module.exports = Port;