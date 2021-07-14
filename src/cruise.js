
function Ship() {
    this.passengers = 0;
};

Ship.prototype.boardPassengers = function(amount_Of_People) {
return this.passengers += amount_Of_People;
}
module.exports = Ship;