function Player() {
  this.ships = [];
  this.takenPositions = [];
  this.sign = "P";
}

Player.prototype.PickShipPosition = function(first, second) {
  return [first, second]
}
