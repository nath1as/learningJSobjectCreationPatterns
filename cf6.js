var ninjaA;
var ninjaB;
function Ninja() {
  this.swung = false;
  this.swing = function () {
    this.swung = true;
    return this;
  };
}

ninjaA = new Ninja();
ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung

console.log(ninjaA.swing().swung);      // this needs to be true
console.log(ninjaB.swing().swung);      // this needs to be true


