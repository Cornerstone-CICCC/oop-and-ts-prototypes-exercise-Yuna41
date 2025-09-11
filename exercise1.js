// Exercise 1: Create a Prototype
// Instructions: 
// 1. Create a constructor function called "Vehicle" that takes "make" and "model" as arguments.
// 2. Define a method called "startEngine" on the prototype of Vehicle that logs "The [make] [model] engine is starting."



function Vehicle(make, model){
  this._make = make
  this._model = model
}

Vehicle.prototype.startEngine = function(){
  console.log(`The ${this._make} ${this._model} engine is starting.`)
}


// Test the Vehicle prototype
const myCar = new Vehicle("Toyota", "Corolla");
myCar.startEngine();  // Output: The Toyota Corolla engine is starting.