var Car = (function () {
    function Car(model) {
        if (model === void 0) { model = null; }
        this.velocity = 0;
        this.velocity = 0;
        if (model == null) {
            this.model = "Ford Mustang";
        }
        else {
            this.model = model;
        }
        this.color = "White";
    }
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.getVelocity = function () {
        return this.velocity;
    };
    Car.prototype.setVelocity = function (velocity) {
        this.velocity = velocity;
    };
    Car.prototype.speedUp = function () {
        this.velocity++;
    };
    Car.prototype.brake = function () {
        this.velocity--;
    };
    return Car;
}());
var car1 = new Car("Chevrolet Camaro");
var car2 = new Car();
var car3 = new Car();
car1.setColor("Red");
car1.speedUp();
car1.speedUp();
car1.speedUp();
/*car2.setColor("Blue");
car3.setColor("Yellow");*/
console.log("The color of car 1 is: " + car1.getColor());
console.log("The velocity of car 1 is: " + car1.getVelocity());
console.log("The model of car 1 is: " + car1.getModel());
car1.brake();
console.log("The velocity of car 1 after brake is: " + car1.getVelocity());
/*console.log("The color of car 2 is: "+ car2.getColor());
console.log("The color of car 3 is: "+ car3.getColor());*/
