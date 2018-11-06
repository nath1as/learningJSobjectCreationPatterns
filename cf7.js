var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object


var ninjaB = new ninjaA.constructor;
// orvar ninjaB = Object.create(Object.getPrototypeOf(ninjaA));


console.log(ninjaB.constructor === ninjaA.constructor);    // this should be true

