function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

var foo = {
  a: 1
};

var bar = createObject(foo);
foo.isPrototypeOf(bar);         // true

