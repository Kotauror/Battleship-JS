function Game() {
  this.board = new Board;
  this.player = new Player;
  this.interface = new Interface;
}

Game.prototype.askPlayerForShip = function() {
  // var place = this.interface.AskforPlace();
  // var output = this.player.PickShipPosition()
  var output = ["a1", "a2"]
  if (this.board.PutShipOnBoard(output, this.player.sign)) {
    ship = new Ship(output)
    this.player.ships.push(ship)
  }
  this.interface.showBoard(this.board.positions);
}
