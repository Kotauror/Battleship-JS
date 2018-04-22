function Interface() {

}

Interface.prototype.AskforPlace = function() {
  var readline = require('readline');

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("What do you think of node.js? ", function(answer) {
    console.log("Thank you for your valuable feedback:", answer);

    rl.close();
  });
}

Interface.prototype.showBoard = function(positions) {
  let string = ""
  for(var i = 0; i < positions.length; i++) {
    string += (positions[i] + " ")
    if ((i+1)%4 === 0 ) {
      string += "\n"
    }
  }
  console.log(string)
}
