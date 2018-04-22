function Interface() {

}

Interface.prototype.showBoard = function(positions) {
  let string = ""
  for(var i = 0; i < positions.length; i++) {
    string += (positions[i] + " ")
    if ((i+1)%4 === 0 ) {
      string += "\n"
    }
  }
  return string
}
