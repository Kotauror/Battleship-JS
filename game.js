function Game() {
  this.board = new Board;
  this.player = new Player;
}

Game.prototype.askPlayerForShip = function() {
  var output = this.player.PickShipPosition()
  this.board.PutShipOnBoard(output, this.player.sign)
}
