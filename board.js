function Board() {
  this.positions = ["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "d4"]
}

Board.prototype.PutShipOnBoard = function(details, sign) {
  if (this.CheckIfShipAdmissible(details) && this.IsPlaceForShip(details)) {
    this.placeSignOnBoard(details, sign)
  }
}

Board.prototype.CheckIfShipAdmissible = function(details) {
  var arrayOfLetters = []
  var arrayOfNumbers = []
  for(var i = 0; i <= details.length-1; i ++) {
    arrayOfLetters.push(details[i][0])
    arrayOfNumbers.push(details[i][1])
  }

  if ( (this.isUnique(arrayOfNumbers) === true) || (this.isUnique(arrayOfLetters) === true)) {
    return true
  }
}

Board.prototype.IsPlaceForShip = function(details) {
  let counter = 0
  for (var i = 0; i < details.length-1; i ++) {
    if (this.positions.includes(details[i])) {
      counter += 1
    }
  }

  if (counter === details.length-1) {
    return true
  }
}

Board.prototype.isUnique = function(array) {
  if (!!array.reduce(function(a, b){ return (a === b) ? a : NaN; })) {
    return true
  }
}

Board.prototype.placeSignOnBoard = function(details, sign) {
  for(var i = 0; i < this.positions.length-1; i++) {
    for(var j = 0; j < details.length; j ++) {
      if (this.positions[i] == details[j]) {
        this.positions[i] = sign
      }
    }
  }

  // for(var i = 0; i < details.length-1; i ++) {
  //   for(var j = 0; j < this.positions.length-1; j++) {
  //     console.log(details[i])
  //     if (details[i] == this.positions[j]) {
  //       console.log(sign)
  //       this.positions[j] = sign
  //     }
  //   }
  // }
}
