## Battleship game

Features implemented so far:
- user can place a ship on a map when:
  - a ship is admissible (vertical or horizontal);
  - the places intended for the sip are free.

Try it by typing in the console:

```plain
game = new Game();
// in the future: var output = game.player.PickShipPosition("a1", "a2");
// --> working version for now var output = ["a1", "a2"]
game.board.PutShipOnBoard(output, game.player.sign);
game.interface.showBoard(game.board.positions);
```

Next features - interface class will ask the player for the move.
