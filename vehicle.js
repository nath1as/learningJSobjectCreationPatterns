function Vehicle() {
  // if we don't call with new
  // the if statement is true
  // so we create and return a new instance
  if (!(this instanceof Vehicle)) {
    return new Vehicle();
  }
  return this;
}


Vehicle.prototype = {
  doors: 4,
  wheels: 4,
};

var sedan = new Vehicle();
var coupe = new Vehicle();
coupe.doors = 2;

console.log(sedan.hasOwnProperty("doors"));
console.log(coupe.hasOwnProperty("doors"));

console.log(sedan.doors);
console.log(coupe.doors);

function Coupe() {
  if (!(this instanceof Coupe)) {
    return new Coupe();
  }
  return this;
}

Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;

var crx = new Coupe();

console.log(crx.doors);
console.log(crx.hasOwnProperty("doors"));
console.log(crx instanceof Vehicle);
console.log(crx instanceof Coupe);
console.log(sedan instanceof Coupe);
console.log(sedan instanceof Vehicle);

function Motorcycle() {
  var o = this;
  if (!(o instanceof Motorcycle)) {
    return new Motorcycle();
  }
  o.doors = 0;
  o.wheels = 2;
  return o;
}

// we can also modify the props on protoype
// or in the contruction function
// Motorcycle.prototype.doors = 0;
// Motorcycle.prototype.wheels = 2;
Motorcycle.prototype = new Vehicle();

var monster = new Motorcycle();
console.log(monster.doors);

function Sedan() {
}

Sedan.prototype = Object.create(Vehicle.prototype);

var lesabre = new Sedan();
console.log(lesabre instanceof Sedan);
console.log(lesabre instanceof Vehicle);

var prototype_car = {
  doors: 5,
  wheels: 3
};

var ceo_car = Object.create(prototype_car);
ceo_car.doors = 7;
console.log(ceo_car.doors); //different obj in memory
console.log(prototype_car.doors);
