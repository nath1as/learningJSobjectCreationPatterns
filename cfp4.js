Object.prototype.begetObject = function () {
  function F() {}
  F.prototype = this;
  return new F();
};

var foo = {
  a: 1,
};

var bar = foo.begetObject();
foo.isPrototypeOf(bar);         // true

