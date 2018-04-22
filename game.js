function Game() {
  this.board = new Board;
  this.player = new Player;
  this.interface = new Interface;
}

Game.prototype.askPlayerForShip = function() {
  var output = this.player.PickShipPosition()
  this.board.PutShipOnBoard(output, this.player.sign)
  this.interface.showBoard(this.board.positions);
}
